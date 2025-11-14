'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import TextField from '@/src/shared/ui/TextField';
import Button from '@/src/shared/ui/Button';

interface SearchPostProps {
  total: number;
  searchParams: {
    title?: string;
    author?: string;
  };
}

export default function SearchPost({ searchParams, total }: SearchPostProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const [title, setTitle] = useState(searchParams.title || '');
  const [author, setAuthor] = useState(searchParams.author || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    const params = new URLSearchParams(currentSearchParams.toString());
    if (title) {
      params.set('title', title);
    } else {
      params.delete('title');
    }

    if (author) {
      params.set('author', author);
    } else {
      params.delete('author');
    }

    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="flex w-sm flex-col items-end justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <div className="text-sm font-semibold">총 {total}건</div>
      <div className="flex w-full flex-row items-center justify-between space-x-10">
        <p className="text-center">제목</p>
        <TextField
          className="w-70"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-row items-center justify-between space-x-10">
        <p>작성자</p>
        <TextField
          className="w-70"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <Button type="submit" label="검색" className="w-20" />{' '}
    </form>
  );
}
