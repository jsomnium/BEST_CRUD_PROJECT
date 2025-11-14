import TextField from '@/src/shared/ui/TextField';
import Button from '@/src/shared/ui/Button';

interface SearchPostProps {
  total: number;
  searchParams: {
    title?: string;
    author?: string;
  };
}

// 검색 시, url parameter로 검색어를 넘겨주도록 구현 예정
export default function SearchPost({ searchParams }: SearchPostProps) {
  return (
    <div className="flex w-sm flex-col items-end justify-center gap-4">
      <div className="flex w-full flex-row items-center justify-between space-x-10">
        <p className="text-center">제목</p>
        <TextField className="w-70" value={searchParams.title} />
      </div>
      <div className="flex w-full flex-row items-center justify-between space-x-10">
        <p>작성자</p>
        <TextField className="w-70" value={searchParams.author} />
      </div>
      <Button label="검색" className="w-20" />
    </div>
  );
}
