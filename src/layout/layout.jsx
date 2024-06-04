import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}

export default Layout;
