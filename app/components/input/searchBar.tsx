// components/SearchBar.tsx
import { useState } from "react";

interface SearchBarProps {
  onSearch: (fromCurrency: string, toCurrency: string) => void;
  list: any[];
}

export function SearchBar({ onSearch, list }: SearchBarProps) {
  const [fromCurrency, setFromCurrency] = useState("KRW");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(fromCurrency, toCurrency);
  };
  console.log();

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          type="text"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          placeholder="From currency..."
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <input
          type="text"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          placeholder="To currency..."
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
    </form>
  );
}
