import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="flex justify-center flex-1">
        <div className="container p-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
