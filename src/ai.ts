import OpenAI from 'openai'
import { GoogleGenAI } from '@google/genai'

export const openai = new OpenAI()
export const googleGenAI = new GoogleGenAI({})
