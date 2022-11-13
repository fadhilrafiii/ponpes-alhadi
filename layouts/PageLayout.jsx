import { useState } from 'react';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const PageLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const actionToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar isSidebarOpen={isSidebarOpen} actionToggleSidebar={actionToggleSidebar} />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
