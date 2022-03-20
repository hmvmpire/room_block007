import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className='layout_body'>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};


export default Layout;