import type { AIMessage } from '../types';
import { addMessages, getMessages } from './memory';
import { runOpenAiLLM } from './llm';
import { showLoader, logMessage } from './ui';

export const runAgent = async({
  userMessage,
  tools
}: {
  userMessage: string,
  tools?: any[]
}): Promise<AIMessage[]> => {
  await addMessages([{ role: 'user', content: userMessage }]);

  const loader = showLoader('😊');

  const history = await getMessages();
  const response = await runOpenAiLLM({
    messages: history,
    tools
  });

  if (response.tool_calls) {
    console.log(response.tool_calls);
  }
    
  await addMessages([response]);

  logMessage(response);
  loader.stop();

  return getMessages();
}