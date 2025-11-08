import 'dotenv/config'
import { runOpenAiLLM, runGoogleGenAiLLM } from './src/llm'
import { getMessages } from './src/memory'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message as a command line argument.')
  process.exit(1)
}

const messages = await getMessages()

const openAiResponse = await runOpenAiLLM({ 
  messages
 })
console.log('OpenAI Response:', openAiResponse)

// const googleGenAiResponse = await runGoogleGenAiLLM({ messages })
// console.log('Google GenAI Response:', googleGenAiResponse)
