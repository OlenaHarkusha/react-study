import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
