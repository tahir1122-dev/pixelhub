import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = () => {
        // Scroll to top when clicking footer links
        window.scrollTo(0, 0);
    };

    const socialLinks = [
        { icon: FaFacebookF, href: 'https://www.facebook.com/share/1D28Af5JoV/', color: '#1877f2' },
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/pixel-hub-541331369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5' },
        { icon: FaInstagram, href: 'https://www.instagram.com/pixelhub.official?igsh=MTl4dTlnemhveG5rbQ==', color: '#e4405f' },
    ];

    const services = [
        'Web Development',
        'E-Commerce Solutions',
        'Shopify Development',
        'Social Media Marketing',
        'Video Editing',
        'Graphic Design'
    ];

    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col lg={4} md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="d-flex align-items-center mb-3 gap-2">
                                <img src="/images/logo.png" alt="PixelHub Logo" style={{ height: '150px', width: '150px', objectFit: 'contain' }} />

                            </div>
                            <p className="mb-4">
                                Your trusted partner for digital solutions. We create stunning websites,
                                powerful e-commerce platforms, and effective marketing strategies to
                                help your business thrive in the digital world.
                            </p>
                            <div className="d-flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-light"
                                        whileHover={{ scale: 1.2, color: social.color }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                                            border: '1px solid rgba(255, 215, 0, 0.3)',
                                        }}
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={2} md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h5 className="text-primary mb-3">Services</h5>
                            <ul className="list-unstyled">
                                {services.map((service, index) => (
                                    <li key={index} className="mb-2">
                                        <Link to="/services" className="text-light text-decoration-none">
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </Col>

                    <Col lg={2} md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <h5 className="text-primary mb-3">Courses</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">Graphic Design</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">Video Editing</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">MS Office</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">YouTube Automation</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">Website Development</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">SEO</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#courses" className="text-light text-decoration-none">Spoken English</a>
                                </li>
                            </ul>
                        </motion.div>
                    </Col>

                    <Col lg={2} md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h5 className="text-primary mb-3">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/" className="text-light text-decoration-none" onClick={handleLinkClick}>Home</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/about" className="text-light text-decoration-none" onClick={handleLinkClick}>About Us</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/portfolio" className="text-light text-decoration-none" onClick={handleLinkClick}>Portfolio</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/testimonials" className="text-light text-decoration-none" onClick={handleLinkClick}>Testimonials</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="text-light text-decoration-none" onClick={handleLinkClick}>Contact</Link>
                                </li>
                            </ul>
                        </motion.div>
                    </Col>

                    <Col lg={3} md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h5 className="text-primary mb-3">Contact Info</h5>
                            <div className="mb-3">
                                <FaEnvelope className="text-primary me-2" />
                                <a href="mailto:pixelhub714@gmail.com" className="text-light text-decoration-none">
                                    pixelhub714@gmail.com
                                </a>
                            </div>
                            <div className="mb-3">
                                <FaPhone className="text-primary me-2" />
                                <a href="tel:+923180732632" className="text-light text-decoration-none">
                                    +92 318 0732632
                                </a>
                            </div>
                            <div className="mb-3">
                                <FaMapMarkerAlt className="text-primary me-2" />
                                <span>92B Block Shadab Colony Road, Sherwani Housing Scheme, Lahore</span>
                            </div>
                        </motion.div>
                    </Col>
                </Row>

                <hr className="my-4" style={{ borderColor: 'rgba(255, 215, 0, 0.3)' }} />

                <Row>
                    <Col md={6}>
                        <motion.p
                            className="mb-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            &copy; {currentYear} PixelHub. All rights reserved.
                        </motion.p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
                            <a href="#" className="text-light text-decoration-none">Terms of Service</a>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
