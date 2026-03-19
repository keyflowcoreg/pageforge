import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { generateLandingPage } from '@/lib/gemini';
import { saveRecord } from '@/lib/store';
import type { GenerationInput } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GenerationInput;

    const { businessName, description, targetAudience, cta, style, industry, colorScheme } = body;

    if (!businessName || !description || !cta) {
      return Response.json(
        { error: 'businessName, description, and cta are required' },
        { status: 400 }
      );
    }

    const input: GenerationInput = {
      businessName: businessName.trim(),
      description: description.trim(),
      targetAudience: targetAudience?.trim() || 'customers',
      cta: cta.trim(),
      style: style || 'Modern',
      industry: industry?.trim() || 'General',
      colorScheme: colorScheme?.trim() || 'Blue',
    };

    const result = await generateLandingPage(input);

    const id = uuidv4();
    const record = {
      id,
      input,
      result,
      createdAt: new Date().toISOString(),
      isPaid: false,
    };

    saveRecord(record);

    return Response.json({
      id,
      html: result.html,
      headline: result.headline,
      subheadline: result.subheadline,
      metaTags: result.metaTags,
      preview: true,
    });
  } catch (error) {
    console.error('Generate error:', error);
    return Response.json(
      { error: 'Failed to generate landing page. Please try again.' },
      { status: 500 }
    );
  }
}
