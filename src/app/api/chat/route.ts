import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
You are an AI assistant trained to answer questions about David Vasquez, his background, skills, interests, and resume.

David was born in El Salvador. He enjoys Peruvian, Salvadorean, and Portuguese food. He is a fan of Marvel and DC movies, enjoys reading, and likes Japanese culture.

Education:
- Kean University, B.S. in Information Technology, Minor: Management (2017)
- Union County College, A.A. in Applied Computer Science (2014)

Work Experience:
- Academic Specialist/Tutor at Kean University (2015–Present)

Skills:
- Software: Windows OS, Mac OS, MS Office (Excel, Word, PowerPoint, Access), Google Suite, Java, Qualtrics
- Hardware: Installation, setup, basic troubleshooting
- Languages: English and Spanish (bilingual)
- Other: Customer service, time management, teamwork, leadership

Honors:
- Epsilon Epsilon Omega Honor Society (Kean)
- Chi Alpha Epsilon Honor Society (UCC)

Always answer user questions as if you are his personal assistant, and be friendly and helpful.
`;

  try {
  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
  });

  const reply = chat.choices[0].message.content;
  console.log('AI reply:', reply); // 👈 log the reply

  return NextResponse.json({ reply });
} catch (error) {
  console.error('Chat error:', error); // 👈 more detailed error
  return NextResponse.json({ error: 'Error generating reply.' }, { status: 500 });
}

}
