import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ReactPlayer from './Player';
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='main-color'>
      <ReactPlayer></ReactPlayer>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer></Footer>
      {renderPage()}
    </div>
  );
}
