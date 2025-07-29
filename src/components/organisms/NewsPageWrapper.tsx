"use client";

import React, { useState } from 'react';
import NewsSearchBar from './NewsSearchBar';
import NewsSearch from './NewsSearch';
import { NewsFirebase } from '@/app/types';

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

interface Props {
  allNews: NewsItem[];
}

export default function NewsPageWrapper({ allNews }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <NewsSearchBar onSearch={setSearchQuery} />
      <div className="container mx-auto px-4 max-w-6xl pb-20">
        <div className="mb-16">
          <NewsSearch allNews={allNews} searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
} 