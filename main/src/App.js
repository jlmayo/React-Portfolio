import React from 'react';
import Header from './components/pages/Header';
import Navigation from './components/pages/Navigation';
import Project from './components/Project';
import Form from './components/Form/Form';
import Footer from './components/pages/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <Navigation />
            <Project />
            <Form />
            <Footer />
        </div>
    );
}