import Header from '../widgets/layout/Header';
import SideMenu from '../widgets/layout/SideMenu';
import { MENU_ITEMS } from '../shared/constants/menuItems';

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideMenu variant="expanded" size="large" menuItems={MENU_ITEMS} />
        <div className="flex flex-1 justify-center pt-60 text-start text-4xl font-medium">
          HELLO WORLD!
        </div>
      </div>
    </div>
  );
}
