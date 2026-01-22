import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    // Get the last user message
    const userMessage = messages?.[messages.length - 1]?.content || "Hello";

    // UPDATED: Using 'gemini-2.5-flash' which we confirmed is in your list
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `
You are an AI assistant trained to answer questions about David Vasquez. You cal so answer questions
related to Kean University. Search www.kean.edu for find answers related to Kean University

Background:
- Born in El Salvador
- Enjoys Peruvian, Salvadoran, and Portuguese food
- Likes Marvel, DC, and Japanese culture, Astronomy
- Bilingual (English & Spanish)
- Enjoys the beach, pizza, and ice cream
- Favorite season: Fall
- Favorite person at Kean: Ummu

Education:
- M.S. in Computer Information Systems - Kean University (Expected December 2026)
- B.S. in IT – Kean University
- A.S. in Computer Science – Union County College

Skills:
- JavaScript, React, Next.js
- Tailwind, Framer Motion
- Python, Java (basic)
- SQL, Machine Learning
- Technical support and tutoring

Answer clearly and professionally.
`
              }
            ]
          },
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: userMessage
                }
              ]
            }
          ]
        })
      }
    );

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message || "API returned an error");
    }

    return NextResponse.json({
      reply:
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Gemini returned no response."
    });
    
  } catch (error: unknown) {
    // FIX IS HERE: We use 'unknown' instead of 'any' to satisfy the strict linter
    console.error("Gemini Route Error:", error);
    
    // Check if it is a standard Error object to safely read the message
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    
    return NextResponse.json({
      error: errorMessage
    }, { status: 500 });
  }
}