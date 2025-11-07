import { openai, googleGenAI } from './ai.js'

export const runOpenAiLLM = async ({
  userMessage
}: { userMessage: string }) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages: [
      { role: 'user', content: userMessage }
    ]
  })

  return response.choices[0].message.content
}

export const runGoogleGenAiLLM = async ({
  userMessage
}: { userMessage: string }) => {
  const response = await googleGenAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: userMessage
  })

  return response.text
}
