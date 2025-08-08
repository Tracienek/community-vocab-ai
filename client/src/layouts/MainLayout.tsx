import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mt-4">{children}</main>
    </>
  );
};

export default MainLayout;
