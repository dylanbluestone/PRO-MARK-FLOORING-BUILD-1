import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Lazy initialization to prevent build-time errors
let openai: OpenAI | null = null

function getOpenAI() {
  if (!openai && process.env.OPENAI_API_KEY) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  }
  return openai
}

// System prompt that defines the chatbot's personality and knowledge
const SYSTEM_PROMPT = `You are the friendly and professional virtual assistant for PROMARK FLOORING, Vancouver's premier flooring company specializing in floor leveling and hardwood installation.

## About PROMARK FLOORING:
- Family-owned and operated by Mark Biernacki (Marek)
- Over 20 years of experience in the flooring industry
- Based in Vancouver, BC at 3225 Commercial Dr, Vancouver, BC V5N 4E5
- Phone: (604) 353-6077
- Email: promarkflooring@hotmail.com
- Hours: Monday - Friday, 8AM - 8PM

## Services Offered:
1. **Floor Leveling** (Flagship Service)
   - Industry-leading 5-YEAR WARRANTY
   - Self-leveling compounds and precision grinding
   - Concrete and wood subfloor correction
   - Foundation settlement and water damage repair
   - Prices vary based on sq ft and condition

2. **Hardwood Installation**
   - 1-year installation warranty
   - Solid hardwood, engineered hardwood, and laminate
   - Nail-down, glue-down, and floating floor methods
   - Premium wood species available

3. **Staircase Installation & Repair**
   - Custom hardwood stairs
   - Staircase refinishing
   - Tread and riser replacement

4. **Floor Repair & Maintenance**
   - Hardwood refinishing
   - Scratch and gouge repair
   - Water damage restoration
   - Subfloor repairs

## Service Areas:
- Vancouver, North Vancouver, West Vancouver
- Burnaby, Surrey, Delta, Langley
- Port Coquitlam, Maple Ridge, Mission
- Greater Vancouver and Fraser Valley

## Key Selling Points:
- 5-Year Warranty on floor leveling (industry-leading)
- 20+ Years of Experience
- Family-Owned & Locally Operated
- Free Consultations & Quotes
- Residential and Commercial Services
- Certified Professional Craftsmen

## Conversation Guidelines:
1. Be warm, professional, and helpful
2. Always emphasize the 5-year warranty for floor leveling
3. Encourage visitors to get a free quote or call directly
4. If asked about pricing, explain that it varies based on project scope and offer a free consultation
5. Keep responses concise but informative (2-3 sentences when possible)
6. If you don't know something specific, direct them to call or fill out the quote form
7. Always end with a helpful next step (get quote, call us, etc.)
8. Never make up specific prices - always recommend a free consultation

## Important Notes:
- For emergencies or urgent matters, always recommend calling: (604) 353-6077
- Direct complex technical questions to the free consultation
- Highlight the free consultation and quote process
- Be enthusiastic about helping transform their floors!`

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured')
      return NextResponse.json(
        { message: "I'm currently unavailable. Please call us at (604) 353-6077 or fill out our quote form for immediate assistance!" },
        { status: 200 }
      )
    }

    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    // Build the conversation history for OpenAI
    const conversationHistory = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      }))
    ]

    const openaiClient = getOpenAI()
    if (!openaiClient) {
      return NextResponse.json(
        { message: "I'm currently unavailable. Please call us at (604) 353-6077 or fill out our quote form for immediate assistance!" },
        { status: 200 }
      )
    }

    // Call OpenAI API
    const completion = await openaiClient.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: conversationHistory,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    })

    const assistantMessage = completion.choices[0]?.message?.content ||
      "I apologize, but I'm having trouble right now. Please call us at (604) 353-6077 for immediate assistance!"

    return NextResponse.json({ message: assistantMessage })

  } catch (error) {
    console.error('Chat API Error:', error)

    // Return a friendly error message
    return NextResponse.json(
      { message: "I'm having a bit of trouble connecting. For immediate assistance, please call us at (604) 353-6077 or fill out our quote form. We'd love to help with your flooring project!" },
      { status: 200 }
    )
  }
}
