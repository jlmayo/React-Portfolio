import React, {useState} from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Form from './Form/Form';


export default function Project() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects />;
    }
    if (currentPage === 'Contact Me') {
      return <Form />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}