import 'dotenv/config'
import { runOpenAiLLM, runGoogleGenAiLLM } from './src/llm'
import { addMessages, getMessages } from './src/memory'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message as a command line argument.')
  process.exit(1)
}

await addMessages([{ role: 'user', content: userMessage }])
const messages = await getMessages()

const openAiResponse = await runOpenAiLLM({ 
  messages
 })
await addMessages([{ role: 'assistant', content: openAiResponse }])
console.log('OpenAI Response:', openAiResponse)

const googleGenAiResponse = await runGoogleGenAiLLM({ messages })
await addMessages([{ role: 'assistant', content: googleGenAiResponse }])
console.log('Google GenAI Response:', googleGenAiResponse)
