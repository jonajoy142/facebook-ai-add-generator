import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in the environment.")
}

const genAI = new GoogleGenerativeAI(apiKey)

export async function POST(request: NextRequest) {
  try {
    const { product, audience, goal, tone, benefits } = await request.json()

    if (!product || !audience || !goal || !tone || !benefits?.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const benefitsText = benefits.filter((b: string) => b.trim()).join(', ')

    const prompt = `Create 3 Facebook ad copy variations for the following:

Product/Service: ${product}
Target Audience: ${audience}
Campaign Goal: ${goal}
Tone: ${tone}
Key Benefits: ${benefitsText}

For each variation, provide:
1. Headline (max 25 characters)
2. Primary Text (around 125 characters for best performance, max 250)
3. Description (max 30 characters)
4. Call-to-Action (choose from: Learn More, Shop Now, Sign Up, Download, Get Quote, Contact Us, Book Now)

Make each variation different in approach - one emotional, one benefit-focused, one urgency-based.

Format your response as JSON with this structure:
{
  "adCopies": [
    {
      "headline": "text here",
      "primaryText": "text here", 
      "description": "text here",
      "cta": "Learn More"
    }
  ]
}

Ensure headlines are under 25 characters and descriptions are under 30 characters. Make the copy compelling and click-worthy.`

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const result = await model.generateContent(prompt)
    const responseText = result.response.text()

    console.log("Gemini raw response:\n", responseText)

    const jsonMatch = responseText.match(/\{[\s\S]*\}/)

    if (!jsonMatch) {
      throw new Error("Could not parse AI response as JSON.")
    }

    const parsedResponse = JSON.parse(jsonMatch[0])

    return NextResponse.json(parsedResponse)

  } catch (error) {
    console.error("Error generating ads:", error)
    return NextResponse.json(
      { error: "Failed to generate ad copy" },
      { status: 500 }
    )
  }
}
