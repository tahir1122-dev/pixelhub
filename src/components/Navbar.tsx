import React, { useEffect, useState } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    // Scroll to top when location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Close navbar when route changes (for mobile)
    useEffect(() => {
        setExpanded(false);
    }, [location.pathname]);

    const handleNavClick = () => {
        // Close mobile navbar and scroll to top
        setExpanded(false);
        window.scrollTo(0, 0);
    };

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <BSNavbar
            expand="lg"
            fixed="top"
            className="py-3 bg-dark"
            style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.1)', zIndex: 1030 }}
            expanded={expanded}
            onToggle={handleToggle}
        >
            <Container>
                <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
                    <img
                        src="/images/logo.png"
                        alt="PixelHub Logo"
                        className="navbar-logo"
                    />
                </BSNavbar.Brand>
                <BSNavbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="border-0"
                    style={{ boxShadow: 'none' }}
                />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item) => (
                            <Nav.Item key={item.name}>
                                <Nav.Link
                                    as={Link}
                                    to={item.path}
                                    className={`mx-2 fw-medium ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={handleNavClick}
                                >
                                    {item.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;
