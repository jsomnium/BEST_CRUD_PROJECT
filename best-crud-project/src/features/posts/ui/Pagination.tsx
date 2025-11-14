'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(currentSearchParams.toString());
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`); // (예: /posts?title=검색어&page=3)
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`mx-1 cursor-pointer rounded px-3 py-1 ${
            currentPage === page ? 'bg-primary text-white' : 'bg-grey-250'
          }`}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
