import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaShoppingCart,
    FaShopify,
    FaShareAlt,
    FaVideo,
    FaPalette,
    FaArrowRight,
    FaCheckCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            description: 'Custom websites built with modern technologies for optimal performance and user experience.',
            features: [
                'Responsive Design',
                'Fast Loading Speed',
                'SEO Optimized',
                'Cross-browser Compatible',
                'Mobile First Approach'
            ],
            price: 'Starting at $1,500',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            icon: FaShoppingCart,
            title: 'E-Commerce Development',
            description: 'Powerful online stores that convert visitors into customers with seamless shopping experiences.',
            features: [
                'Payment Gateway Integration',
                'Inventory Management',
                'Order Tracking',
                'Customer Accounts',
                'Analytics Dashboard'
            ],
            price: 'Starting at $2,500',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            icon: FaShopify,
            title: 'Shopify Solutions',
            description: 'Expert Shopify development and customization to maximize your online sales potential.',
            features: [
                'Custom Theme Development',
                'App Integration',
                'Store Migration',
                'Performance Optimization',
                'Training & Support'
            ],
            price: 'Starting at $1,200',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            icon: FaShareAlt,
            title: 'Social Media Marketing',
            description: 'Strategic social media campaigns that build brand awareness and drive engagement.',
            features: [
                'Content Strategy',
                'Social Media Management',
                'Paid Advertising',
                'Analytics & Reporting',
                'Community Building'
            ],
            price: 'Starting at $800/month',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        {
            icon: FaVideo,
            title: 'Video Editing',
            description: 'Professional video editing services for marketing, social media, and promotional content.',
            features: [
                'Motion Graphics',
                'Color Correction',
                'Audio Enhancement',
                'Social Media Formats',
                'Brand Integration'
            ],
            price: 'Starting at $300/video',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            hasVideo: true,
        },
        {
            icon: FaPalette,
            title: 'Graphic Designing',
            description: 'Creative graphic design solutions that capture your brand essence and engage your audience.',
            features: [
                'Logo Design',
                'Brand Identity',
                'Marketing Materials',
                'Social Media Graphics',
                'Print Design'
            ],
            price: 'Starting at $200',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We understand your goals, target audience, and project requirements.',
        },
        {
            step: '02',
            title: 'Strategy',
            description: 'We develop a comprehensive strategy tailored to your specific needs.',
        },
        {
            step: '03',
            title: 'Design',
            description: 'Our team creates stunning designs that align with your brand vision.',
        },
        {
            step: '04',
            title: 'Development',
            description: 'We bring designs to life with clean, efficient, and scalable code.',
        },
        {
            step: '05',
            title: 'Launch',
            description: 'We deploy your project and ensure everything works perfectly.',
        },
        {
            step: '06',
            title: 'Support',
            description: 'Ongoing maintenance and support to keep your project running smoothly.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '120px' }}>
                <Container>
                    <div className="text-center mb-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-2 fw-bold mb-4">
                                Our <span className="text-primary">Services</span>
                            </h1>
                            <p className="lead text-light mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                Comprehensive digital solutions designed to elevate your business
                                and drive measurable results in the digital landscape.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="section">
                <Container>
                    <Row>
                        {services.map((service, index) => (
                            <Col lg={4} md={6} key={index} className="mb-5">
                                <motion.div
                                    className="card h-100 border-0 overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 215, 0, 0.2)',
                                    }}
                                >
                                    <div
                                        className="card-header border-0 text-center py-4"
                                        style={{
                                            background: service.gradient,
                                            color: 'white',
                                        }}
                                    >
                                        <service.icon size={60} />
                                        <h3 className="fw-bold mt-3 mb-0">{service.title}</h3>
                                    </div>
                                    <div className="card-body p-4">
                                        <p className="text-light mb-4">{service.description}</p>

                                        {/* Video for Video Editing Service */}
                                        {service.hasVideo && (
                                            <div className="mb-4">
                                                <motion.div
                                                    className="service-video"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <video
                                                        className="w-100"
                                                        controls
                                                        poster="/video-poster.jpg"
                                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                                    >
                                                        <source src="/video 2.mp4" type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </motion.div>
                                            </div>
                                        )}

                                        <ul className="list-unstyled mb-4">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="mb-2 text-light">
                                                    <FaCheckCircle className="text-primary me-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center">
                                            <div className="text-primary fw-bold mb-3" style={{ fontSize: '1.2rem' }}>
                                                {service.price}
                                            </div>
                                            <Link to="/contact" className="btn btn-outline-primary">
                                                Get Started <FaArrowRight className="ms-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Video Editing Showcase */}
            <section className="section bg-dark">
                <Container>
                    <div className="section-title">
                        <h2>Video Editing Excellence</h2>
                        <p>Watch our professional video editing work in action</p>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-primary mb-4">Professional Video Production</h3>
                                <p className="text-light mb-4">
                                    Our video editing team specializes in creating compelling visual stories
                                    that engage audiences and drive results. From corporate videos to social
                                    media content, we bring your vision to life with professional quality.
                                </p>
                                <ul className="list-unstyled text-light">
                                    <li className="mb-2">
                                        <FaCheckCircle className="text-primary me-2" />
                                        4K Video Editing & Color Grading
                                    </li>
                                    <li className="mb-2">
                                        <FaCheckCircle className="text-primary me-2" />
                                        Motion Graphics & Animation
                                    </li>
                                    <li className="mb-2">
                                        <FaCheckCircle className="text-primary me-2" />
                                        Audio Mixing & Enhancement
                                    </li>
                                    <li className="mb-2">
                                        <FaCheckCircle className="text-primary me-2" />
                                        Social Media Optimization
                                    </li>
                                </ul>
                            </motion.div>
                        </Col>
                        <Col lg={6} className="mb-4">
                            <motion.div
                                className="position-relative"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="video-container" style={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    border: '3px solid var(--primary-color)',
                                    boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
                                }}>
                                    <video
                                        className="w-100"
                                        controls
                                        poster="/video-poster.jpg"
                                        style={{ display: 'block' }}
                                    >
                                        <source src="/video 2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Process Section */}
            <section className="section bg-dark">
                <Container>
                    <div className="section-title">
                        <h2>Our Process</h2>
                        <p>A proven methodology that ensures project success from start to finish</p>
                    </div>
                    <Row>
                        {process.map((step, index) => (
                            <Col lg={4} md={6} key={index} className="mb-4">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="position-relative mb-4">
                                        <motion.div
                                            className="d-inline-flex align-items-center justify-content-center rounded-circle mx-auto"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                                                color: 'var(--dark-bg)',
                                                fontSize: '1.5rem',
                                                fontWeight: 'bold',
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {step.step}
                                        </motion.div>
                                    </div>
                                    <h4 className="text-primary mb-3">{step.title}</h4>
                                    <p className="text-light">{step.description}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="section">
                <Container>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="card bg-dark border-primary p-5">
                            <h2 className="text-primary fw-bold mb-4">Ready to Get Started?</h2>
                            <p className="lead text-light mb-4">
                                Let's discuss your project and create something amazing together.
                                Our team is ready to bring your vision to life.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Start Your Project
                                </Link>
                                <Link to="/portfolio" className="btn btn-outline-primary btn-lg">
                                    View Our Work
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
};

export default Services;
