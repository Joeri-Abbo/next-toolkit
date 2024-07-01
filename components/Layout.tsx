// components/Layout.tsx
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
