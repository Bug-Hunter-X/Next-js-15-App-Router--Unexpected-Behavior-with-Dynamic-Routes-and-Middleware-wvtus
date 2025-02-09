```javascript
// pages/posts/[id]/page.js

import { MetadataRoute } from 'next/server';

export default function PostPage({params}) {
  return (
    <div>Post {params.id}</div>
  );
}

export const metadata = {
  title: `Post ${params.id}`
};

// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  url.pathname = '/about';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: '/posts/:id',
};
```