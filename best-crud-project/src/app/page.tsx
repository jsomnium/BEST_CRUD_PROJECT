import Header from '../widgets/layout/Header';
import SideMenu from '../widgets/layout/SideMenu';

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <SideMenu variant="expanded" size="large" />
    </div>
  );
}
