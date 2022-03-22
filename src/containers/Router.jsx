import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/Home/Home'));
const BookingPage = lazy(() => import('./Pages/BookingPage/Booking'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='booking' element={<BookingPage />} />
          <Route path='booking/:roomId' element={<BookingPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
