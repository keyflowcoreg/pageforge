import { NextRequest, NextResponse } from 'next/server'
import { withX402 } from 'x402-next'
import { getRecord, markPaid } from '@/lib/store'

const WALLET = '0xCc97e4579eeE0281947F15B027f8Cad022933d7e' as const
const NETWORK = (process.env.X402_NETWORK || 'base-sepolia') as 'base' | 'base-sepolia'

const handler = async (request: NextRequest): Promise<NextResponse> => {
  const body = await request.json()
  const { generationId } = body as { generationId?: string }

  if (!generationId) {
    return NextResponse.json({ error: 'generationId is required' }, { status: 400 })
  }

  const record = getRecord(generationId)
  if (!record) {
    return NextResponse.json({ error: 'Generation not found' }, { status: 404 })
  }

  // x402 payment verified by wrapper — mark generation as paid
  markPaid(generationId)

  return NextResponse.json({
    paid: true,
    generationId,
    message: 'Payment confirmed via x402. Clean export unlocked.',
  })
}

export const POST = withX402(handler, WALLET, {
  price: '$29',
  network: NETWORK,
  config: {
    description: 'PageForge — Clean Export, No Watermark ($29 USDC)',
  },
})
