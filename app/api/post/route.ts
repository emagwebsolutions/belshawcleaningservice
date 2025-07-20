import client from '@/data/client.config';
import { groq } from 'next-sanity';
import {  NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'post' && title != null]{
      ..., 
      "body": body[]{
      ..., 
      asset->{
        ...,
        "_key": _id
      }
    },
      'image': mainImage.asset->url,
      "cat_title" : categories[]->title,
      "slug": slug.current,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..400], "") + "...",
      }
      `
    );

    return NextResponse.json(res)
  } catch (err) {
    console.log(err);
  }
}
