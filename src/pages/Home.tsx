import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaCode, FaPalette } from 'react-icons/fa';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section position-relative overflow-hidden" style={{ paddingTop: '120px', minHeight: '100vh' }}>
                <Container className="h-100">
                    <Row className="align-items-center min-vh-100">
                        <Col lg={6} className="order-2 order-lg-1">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center text-lg-start"
                            >
                                <h1 className="display-2 fw-bold mb-4">
                                    Transform Your
                                    <span className="text-primary d-block">Digital Presence</span>
                                    <span className="text-secondary">with PixelHub</span>
                                </h1>
                                <p className="lead mb-4 text-light" style={{ fontSize: '1.3rem' }}>
                                    We create stunning websites, powerful e-commerce solutions, and effective
                                    digital marketing strategies that drive results and grow your business.
                                </p>
                                <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link to="/services" className="btn btn-primary btn-lg px-4 py-3">
                                            Explore Services <FaArrowRight className="ms-2" />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link to="/portfolio" className="btn btn-outline-primary btn-lg px-4 py-3">
                                            View Portfolio
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="hero-visual position-relative d-flex justify-content-center">
                                    <motion.div
                                        className="hero-circle"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            border: '2px solid rgba(255, 215, 0, 0.3)',
                                            borderRadius: '50%',
                                            position: 'relative',
                                        }}
                                    >
                                        <motion.div
                                            className="floating-icon position-absolute"
                                            animate={{ y: [-10, 10, -10] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            style={{ top: '20%', left: '20%' }}
                                        >
                                            <FaCode size={40} className="text-primary" />
                                        </motion.div>
                                        <motion.div
                                            className="floating-icon position-absolute"
                                            animate={{ y: [10, -10, 10] }}
                                            transition={{ duration: 2.5, repeat: Infinity }}
                                            style={{ top: '20%', right: '20%' }}
                                        >
                                            <FaPalette size={40} className="text-secondary" />
                                        </motion.div>
                                        <motion.div
                                            className="floating-icon position-absolute"
                                            animate={{ y: [-15, 15, -15] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            style={{ bottom: '30%', left: '50%', transform: 'translateX(-50%)' }}
                                        >
                                            <FaRocket size={40} className="text-primary" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="text-center mt-4"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <h3 className="text-primary fw-bold">Digital Excellence</h3>
                                    <p className="text-light">Crafted with Precision</p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>

                {/* Floating Background Elements */}
                <motion.div
                    className="position-absolute"
                    style={{ top: '10%', left: '5%', zIndex: -1 }}
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                >
                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 0, 0, 0.1))',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        }}
                    />
                </motion.div>
                <motion.div
                    className="position-absolute"
                    style={{ bottom: '20%', right: '10%', zIndex: -1 }}
                    animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                    transition={{ duration: 15, repeat: Infinity }}
                >
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(45deg, rgba(255, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
                            borderRadius: '50%',
                        }}
                    />
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-5 bg-dark">
                <Container>
                    <Row className="text-center">
                        {[
                            { number: '100+', label: 'Projects Completed' },
                            { number: '50+', label: 'Happy Clients' },
                            { number: '24/7', label: 'Support Available' },
                            { number: '5+', label: 'Years Experience' },
                        ].map((stat, index) => (
                            <Col lg={3} md={6} sm={6} xs={6} key={index} className="mb-3 mb-lg-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="stats-item"
                                >
                                    <h2 className="text-primary fw-bold display-4 stats-number">{stat.number}</h2>
                                    <p className="text-light mb-0">{stat.label}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>            {/* Featured Services Preview */}
            <section className="section">
                <Container>
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                        <p>Delivering cutting-edge digital solutions that drive growth and success</p>
                    </div>
                    <Row className="justify-content-center">
                        {[
                            {
                                icon: '🌐',
                                title: 'Web Development',
                                description: 'Custom websites built with modern technologies and best practices.',
                            },
                            {
                                icon: '🛒',
                                title: 'E-Commerce Solutions',
                                description: 'Powerful online stores that convert visitors into customers.',
                            },
                            {
                                icon: '📱',
                                title: 'Digital Marketing',
                                description: 'Strategic campaigns that amplify your brand and reach.',
                            },
                        ].map((service, index) => (
                            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                                <motion.div
                                    className="card h-100 hover-glow service-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="card-body text-center">
                                        <div className="mb-3 service-icon" style={{ fontSize: '3rem' }}>
                                            {service.icon}
                                        </div>
                                        <h4 className="text-primary mb-3">{service.title}</h4>
                                        <p className="text-light">{service.description}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5">
                        <Link to="/services" className="btn btn-primary btn-lg">
                            View All Services
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
