import { useState } from 'react';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

const NavbarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const actionToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar isSidebarOpen={isSidebarOpen} actionToggleSidebar={actionToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      {children}
    </div>
  );
};

export default NavbarProvider;
