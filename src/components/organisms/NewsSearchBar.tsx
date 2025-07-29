"use client";

import React, { useState } from 'react';
import { Search } from "lucide-react";

interface NewsSearchBarProps {
  onSearch: (query: string) => void;
}

export default function NewsSearchBar({ onSearch }: NewsSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="absolute top-8 right-8 w-96">
      <div className="relative group">
        <div className="flex items-center">
          <Search className="w-5 h-5 text-white mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Buscar por título o descripción…"
            className="w-full px-0 py-1 bg-transparent text-white placeholder-white focus:outline-none border-b-2 border-gray-600 focus:border-orange-500/50 transition-all duration-300 text-lg"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-focus-within:w-full"></div>
      </div>
    </div>
  );
} 