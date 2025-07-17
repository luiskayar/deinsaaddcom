import React from 'react';
import { notFound } from 'next/navigation';
import { getSlugNews } from '@/lib/functions/getSlugNews';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  }
};

export default async function NewsPage({ params }: Props) {
  const { slug } = await params;
  const news = await getSlugNews(slug);

  if (!news) {
    notFound();
  }
  return (
    <article className="prose mx-auto">
      <h1>{news.title}</h1>
       <Image
        src={news.image}
        alt={news.title}
        width={800}  
        height={450}    
        className="rounded-lg"
       />
      <p>{news.description}</p>
    </article>
  );
} 