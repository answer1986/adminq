import { NextResponse } from 'next/server';

export async function POST() {
  console.log('🚀 Starting registration API call');

  try {
    console.log('📝 About to parse form data...');
    // For now, just return success to test if the error is in parsing
    console.log('✅ Skipping form parsing for now');
    return NextResponse.json({ success: true, message: 'Test response - no parsing' });
  } catch (error) {
    console.error('❌ Registration API Error:', error);

    // Very simple error response
    return NextResponse.json({
      error: 'Internal server error',
      details: String(error)
    }, { status: 500 });
  }
}