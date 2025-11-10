import { openai, googleGenAI } from './ai.js'
import type { AIMessage } from '../types'
import { z } from 'zod'
import { zodFunction } from 'openai/helpers/zod.mjs'

export const runOpenAiLLM = async ({
  model = 'gpt-4o-mini',
  messages,
  temperature = 0.1,
  tools
}: { 
  model?: string,
  messages: AIMessage[],
  temperature?: number,
  tools?: { name: string; parameters: z.AnyZodObject }[]
}) => {
  const formattedTools = tools?.map(zodFunction)
  const response = await openai.chat.completions.create({
    model,
    temperature,
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
    model: 'gemini-2.5-flash-lite',
    contents: messages
  })

  return response.text
}
