import 'dotenv/config'

import { runOpenAiLLM, runGoogleGenAiLLM } from './src/llm'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message as a command line argument.')
  process.exit(1)
}

const openAiResponse = await runOpenAiLLM({ userMessage })
console.log('OpenAI Response:', openAiResponse)

const googleGenAiResponse = await runGoogleGenAiLLM({ userMessage })
console.log('Google GenAI Response:', googleGenAiResponse)
