import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, appliance, brand, problem, contactMethod } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'نام معتبر نیست' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 10) {
      return NextResponse.json(
        { error: 'شماره تماس معتبر نیست' },
        { status: 400 }
      );
    }

    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const { error } = await supabase.from('contact_requests').insert({
        name: name.trim(),
        phone: phone.trim(),
        appliance: appliance || null,
        brand: brand || null,
        problem: problem || null,
        contact_method: contactMethod || 'تماس تلفنی',
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error('Supabase error:', error.message);
        return NextResponse.json(
          { error: 'خطا در ثبت درخواست' },
          { status: 500 }
        );
      }
    } else {
      console.log('Contact form submission (no DB configured):', {
        name,
        phone,
        appliance,
        brand,
        problem,
        contactMethod,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'خطای سرور' },
      { status: 500 }
    );
  }
}
