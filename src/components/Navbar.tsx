import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <BSNavbar
                expand="lg"
                fixed="top"
                className={`py-3 transition-all duration-300 ${scrolled
                    ? 'bg-dark bg-opacity-95 backdrop-blur'
                    : 'bg-transparent'
                    }`}
                style={{
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
                }}
            >
                <Container>
                    <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
                        <img
                            src="/images/logo.png"
                            alt="PixelHub Logo"
                            style={{
                                height: '150px',
                                width: 'auto',
                                objectFit: 'contain',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    </BSNavbar.Brand>

                    <BSNavbar.Toggle aria-controls="basic-navbar-nav" />

                    <BSNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navItems.map((item) => (
                                <Nav.Item key={item.name}>
                                    <Nav.Link
                                        as={Link}
                                        to={item.path}
                                        className={`mx-2 fw-medium ${location.pathname === item.path ? 'active' : ''
                                            }`}
                                    >
                                        {item.name}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </BSNavbar.Collapse>
                </Container>
            </BSNavbar>
        </motion.div>
    );
};

export default Navbar;
