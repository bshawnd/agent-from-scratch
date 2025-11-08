import { openai, googleGenAI } from './ai.js'
import type { AIMessage } from '../types'

export const runOpenAiLLM = async ({
  messages
}: { messages: AIMessage[] }) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages
  })

  return response.choices[0].message.content
}

export const runGoogleGenAiLLM = async ({
  messages
}: { messages: AIMessage[] }) => {
  const response = await googleGenAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: messages
  })

  return response.text
}
