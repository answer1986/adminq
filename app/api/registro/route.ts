import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import path from 'path';
import mysql from 'mysql2/promise';

// Disable body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error('RECAPTCHA_SECRET_KEY not set');
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'public/uploads'),
      keepExtensions: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [fields, files] = await form.parse(request as any);

    const apartmentNumber = fields.apartmentNumber?.[0];
    const headName = fields.headName?.[0];
    const headEmail = fields.headEmail?.[0];
    const headPhone = fields.headPhone?.[0];
    const headPassword = fields.headPassword?.[0];
    const comments = fields.comments?.[0];
    const recaptchaToken = fields.recaptchaToken?.[0];

    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json({ error: 'Invalid reCAPTCHA' }, { status: 400 });
    }

    // Collect additional members
    const additionalMembers = [];
    for (let i = 1; i <= 4; i++) {
      const name = fields[`member${i}Name`]?.[0];
      const email = fields[`member${i}Email`]?.[0];
      const phone = fields[`member${i}Phone`]?.[0];
      const photo = files[`member${i}Photo`]?.[0];

      if (name || email || phone || photo) {
        additionalMembers.push({
          name: name || '',
          email: email || '',
          phone: phone || '',
          photoPath: photo ? photo.filepath : null,
        });
      }
    }

    // Connect to database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'adminq',
    });

    // Insert into single table adminq
    const [result] = await connection.execute(
      `INSERT INTO adminq (
        apartment_number, head_name, head_email, head_phone, head_password, head_photo_path,
        member1_name, member1_email, member1_phone, member1_photo_path,
        member2_name, member2_email, member2_phone, member2_photo_path,
        member3_name, member3_email, member3_phone, member3_photo_path,
        member4_name, member4_email, member4_phone, member4_photo_path,
        comments
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        apartmentNumber, headName, headEmail, headPhone, headPassword, files.member0Photo?.[0]?.filepath || null,
        additionalMembers[0]?.name || null, additionalMembers[0]?.email || null, additionalMembers[0]?.phone || null, additionalMembers[0]?.photoPath || null,
        additionalMembers[1]?.name || null, additionalMembers[1]?.email || null, additionalMembers[1]?.phone || null, additionalMembers[1]?.photoPath || null,
        additionalMembers[2]?.name || null, additionalMembers[2]?.email || null, additionalMembers[2]?.phone || null, additionalMembers[2]?.photoPath || null,
        additionalMembers[3]?.name || null, additionalMembers[3]?.email || null, additionalMembers[3]?.phone || null, additionalMembers[3]?.photoPath || null,
        comments
      ]
    );

    await connection.end();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}