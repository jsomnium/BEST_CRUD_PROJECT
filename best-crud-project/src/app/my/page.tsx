import { UserInfo } from '@/src/entities/user/UserInfo';
import Button from '@/src/shared/ui/Button';
import Header from '@/src/widgets/layout/Header';

export default function MyPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1 flex-col px-20 pt-15 pb-25">
        <div className="flex flex-1 flex-col">
          <UserInfo />
        </div>
        <div className="flex flex-row space-x-4 pt-8">
          <Button label="수정하기" className="w-40" />
          <Button label="탈퇴하기" className="w-40" variant="black" />
        </div>
      </div>
    </div>
  );
}
