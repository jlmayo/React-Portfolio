import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Form from './components/Form/Form';
import Footer from './components/Footer';

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