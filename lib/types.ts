export interface GenerationInput {
  businessName: string;
  description: string;
  targetAudience: string;
  cta: string;
  style: 'Modern' | 'Bold' | 'Minimal' | 'Playful';
  industry: string;
  colorScheme: string;
}

export interface GenerationResult {
  html: string;
  headline: string;
  subheadline: string;
  sections: string[];
  metaTags: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface GenerationRecord {
  id: string;
  input: GenerationInput;
  result: GenerationResult;
  createdAt: string;
  isPaid: boolean;
}

export interface ExportRequest {
  generationId: string;
  format: 'nextjs' | 'html';
}

export interface CheckoutRequest {
  generationId: string;
}
