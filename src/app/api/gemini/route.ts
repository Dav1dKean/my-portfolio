import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// 🧠 This is the personal context Gemini will use to answer questions
const systemPrompt = `
You are an AI assistant trained to answer questions about David Vasquez.

Here is his personal background and preferences:
- David was born in El Salvador.
- He enjoys Peruvian, Salvadoran, and Portuguese food.
- He's a fan of Marvel and DC movies.
- He likes Japanese culture and enjoys reading.
- He is bilingual, speaks Spanish and English.
- He enjoys going to the beach, pizza, and ice cream.


Resume Summary:
- David Vasquez is pursuing a Master of Science in Computer Information Systems.
- He got his bachelor's degree in IT from Kean University, and Associate's degree in computer science from Union County College.
- He is highly motivated, detail-oriented, and focused on advancing in technology.
- He has experience with JavaScript, HTML, CSS, React, Next.js, and Tailwind CSS.
- He built a modern portfolio website using Next.js, Framer Motion, and 3D backgrounds.
- He values continuous learning and innovation in web development.
- He has worked as an English writing, and basic Math Tutor for EOF at Kean University.
- He also assists EOF staff and students with basic computer/printer/mobile software/hardware issues.
Skills
Software:     MS Windows OS, MS Office (Access, Excel PowerPoint, Word), Mac OS, Basic Linux, basic Java Programming and Python, 
Qualtrics survey creation, G-Google Suits (Docs/Sheets/Forms), vsc use.
He is also learning about Artificial Intelligence, and other related technologies related to website design,
Hardware:	Computer hardware/software installation, setup, basic troubleshooting and maintenance.
Languages:  Bilingual (Spanish & English)
Other: Data entry, customer service, time management, prioritizing, teamwork, leadership.


Use this information to answer all questions truthfully.
`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = genAI.getGenerativeModel({
    model: 'models/gemini-1.5-flash',
  });

  try {
    const fullPrompt = `${systemPrompt}\n\n${messages
      .map((m: any) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n')}`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response.text();

    return NextResponse.json({ reply: response });
  } catch (err) {
    console.error('Gemini error:', err);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
