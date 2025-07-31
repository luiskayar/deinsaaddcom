"use client";

import React from 'react';
import NewsSearch from './NewsSearch';
import { NewsFirebase } from '@/app/types';

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

interface Props {
  allNews: NewsItem[];
  searchQuery: string;
}

export default function NewsPageWrapper({ allNews, searchQuery }: Props) {
  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl pb-20">
        <div className="mb-16">
          <NewsSearch allNews={allNews} searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
} 