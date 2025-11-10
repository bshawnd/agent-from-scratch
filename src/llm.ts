import { openai, googleGenAI } from './ai.js'
import type { AIMessage } from '../types'
import { zodFunction } from 'openai/helpers/zod.mjs'

export const runOpenAiLLM = async ({
  messages,
  tools
}: { messages: AIMessage[], tools?: any[] }) => {
  const formattedTools = tools?.map(zodFunction)
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages,
    tools: formattedTools,
    tool_choice: 'auto',
    parallel_tool_calls: false
  })

  return response.choices[0].message
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
