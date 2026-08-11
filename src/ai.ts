import OpenAI from 'openai';
import { Commit, Tone } from './types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateReleaseNotes(commits: Commit[], tone: Tone): Promise<string> {
  const commitMessages = commits.map(c => `- ${c.message} (${c.author})`).join('\n');

  let toneInstruction = '';
  switch (tone) {
    case 'professional':
      toneInstruction = 'Write in a formal, professional tone suitable for enterprise changelogs. Group by feature, bugfix, and performance.';
      break;
    case 'funny':
      toneInstruction = 'Write in an over-the-top, humorous, pirate/slack-style tone. Use emojis and sarcasm, but keep the technical details accurate.';
      break;
    case 'concise':
      toneInstruction = 'Write a bulleted list with zero fluff. Maximum 5 lines.';
      break;
  }

  const prompt = `
You are a release note generator.
Given the following commits between two versions, generate release notes.

Tone: ${toneInstruction}

Commits:
${commitMessages}

Please output valid Markdown. Start with a header "## Release Notes".
If funny, add a "TL;DR" section at the top.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: 'You are an expert technical writer.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.8,
    max_tokens: 500,
  });

  return response.choices[0]?.message?.content || 'Failed to generate notes.';
}