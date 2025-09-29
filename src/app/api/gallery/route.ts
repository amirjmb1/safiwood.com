import { NextResponse } from 'next/server';
import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';

export const dynamic = 'force-static';
export const revalidate = 3600;

const REQUIRED_ENV = [
  'AOS_ENDPOINT',
  'AOS_BUCKET',
  'AOS_ACCESS_KEY',
  'AOS_SECRET_KEY',
] as const;

type RequiredEnv = (typeof REQUIRED_ENV)[number];

function getEnv(name: RequiredEnv) {
  const value = process.env[name];
  if (!value) return null;
  return value;
}

export async function GET() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { message: 'Arvan Object Storage is not configured.' },
      { status: 404 },
    );
  }

  const endpoint = getEnv('AOS_ENDPOINT')!;
  const bucket = getEnv('AOS_BUCKET')!;
  const accessKeyId = getEnv('AOS_ACCESS_KEY')!;
  const secretAccessKey = getEnv('AOS_SECRET_KEY')!;
  const cdnBase = process.env.NEXT_PUBLIC_CDN_BASE ?? '';

  const client = new S3Client({
    region: 'default',
    endpoint,
    credentials: { accessKeyId, secretAccessKey },
    forcePathStyle: true,
  });

  const command = new ListObjectsV2Command({ Bucket: bucket, Prefix: 'gallery/' });

  try {
    const result = await client.send(command);
    const contents = result.Contents ?? [];

    const items = contents
      .filter((item) => item.Key && !item.Key.endsWith('/'))
      .map((item, index) => {
        const key = item.Key as string;
        const fileName = key.split('/').pop() ?? `item-${index + 1}`;
        const cleanTitle = fileName
          .replace(/\.[^/.]+$/, '')
          .replace(/[-_]+/g, ' ')
          .trim();
        return {
          id: key,
          title: cleanTitle.length > 0 ? cleanTitle : `نمونه ${index + 1}`,
          description: 'پروژه کابینت اجرا شده توسط تیم صفی.',
          category: 'گالری',
          imageUrl: cdnBase ? `${cdnBase.replace(/\/$/, '')}/${key}` : key,
        };
      });

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Failed to fetch gallery items from AOS', error);
    return NextResponse.json({ message: 'خطا در دریافت تصاویر' }, { status: 502 });
  }
}
