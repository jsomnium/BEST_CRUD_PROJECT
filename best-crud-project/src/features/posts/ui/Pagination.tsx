'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const PAGE_BLOCK_SIZE = 5;

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(currentSearchParams.toString());
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  const currentBlock = Math.floor((currentPage - 1) / PAGE_BLOCK_SIZE);
  const startPage = currentBlock * PAGE_BLOCK_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_BLOCK_SIZE - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevBlock = () => {
    const prevBlockPage = Math.max(1, startPage - PAGE_BLOCK_SIZE);
    handlePageChange(prevBlockPage);
  };

  const handleNextBlock = () => {
    const nextBlockPage = endPage + 1;
    handlePageChange(nextBlockPage);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {currentBlock > 0 && (
        <button
          onClick={handlePrevBlock}
          className="text-grey-650 mx-1 cursor-pointer rounded px-3 py-1"
        >
          &lt;
        </button>
      )}
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
      {endPage < totalPages && (
        <button
          onClick={handleNextBlock}
          className="text-grey-650 mx-1 cursor-pointer rounded px-3 py-1"
        >
          &gt;
        </button>
      )}
    </div>
  );
}
