import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaCode, FaPalette, FaCheckCircle } from 'react-icons/fa';

const Home: React.FC = () => {
    const courses = [
        { title: 'Graphic Design', icon: '🎨', description: 'Learn professional design skills with Adobe Creative Suite' },
        { title: 'Video Editing', icon: '🎬', description: 'Master video editing with industry-standard tools' },
        { title: 'MS Office', icon: '💻', description: 'Excel in Word, Excel, PowerPoint & more' },
        { title: 'YouTube Automation', icon: '🤖', description: 'Automate and monetize your YouTube channel' },
        { title: 'Website Development', icon: '🌐', description: 'Build modern websites with latest technologies' },
        { title: 'SEO', icon: '📈', description: 'Master search engine optimization techniques' },
        { title: 'Spoken English', icon: '🗣️', description: 'Improve your English communication skills' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section position-relative overflow-hidden" style={{ paddingTop: '120px', minHeight: '100vh' }}>
                <Container className="h-100">
                    <Row className="align-items-center min-vh-100">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
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
                                <div className="d-flex gap-3 flex-wrap">
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
                        <Col lg={6}>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="hero-visual position-relative">
                                    <motion.div
                                        className="hero-circle"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            border: '2px solid rgba(255, 215, 0, 0.3)',
                                            borderRadius: '50%',
                                            margin: '0 auto',
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
                                    <motion.div
                                        className="text-center mt-4"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <h3 className="text-primary fw-bold">Digital Excellence</h3>
                                        <p className="text-light">Crafted with Precision</p>
                                    </motion.div>
                                </div>
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
                            <Col md={3} key={index} className="mb-3">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h2 className="text-primary fw-bold display-4">{stat.number}</h2>
                                    <p className="text-light">{stat.label}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Featured Services Preview */}
            <section className="section">
                <Container>
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                        <p>Delivering cutting-edge digital solutions that drive growth and success</p>
                    </div>
                    <Row>
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
                            <Col md={4} key={index} className="mb-4">
                                <motion.div
                                    className="card h-100 hover-glow"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="card-body text-center">
                                        <div className="mb-3" style={{ fontSize: '3rem' }}>
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

            {/* Courses Section */}
            <section id="courses" className="section bg-dark">
                <Container>
                    <div className="section-title text-center">
                        <h2>Our <span className="text-primary">Courses</span></h2>
                        <p>Learn in-demand digital skills from industry experts and advance your career</p>
                    </div>
                    <Row>
                        {courses.map((course, index) => (
                            <Col lg={4} md={6} key={index} className="mb-4">
                                <motion.div
                                    className="card h-100 border-0 overflow-hidden service-card"
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
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3" style={{ fontSize: '4rem' }}>
                                            {course.icon}
                                        </div>
                                        <h4 className="text-primary mb-3">{course.title}</h4>
                                        <p className="text-light mb-4">{course.description}</p>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center justify-content-center mb-2">
                                                <FaCheckCircle className="text-primary me-2" />
                                                <span className="text-light">Expert Instructors</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-2">
                                                <FaCheckCircle className="text-primary me-2" />
                                                <span className="text-light">Hands-on Projects</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <FaCheckCircle className="text-primary me-2" />
                                                <span className="text-light">Certificate of Completion</span>
                                            </div>
                                        </div>
                                        <Link to="/contact" className="btn btn-outline-primary">
                                            Enroll Now <FaArrowRight className="ms-2" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Video Editing Projects Section */}
            <section className="section">
                <Container>
                    <div className="section-title text-center">
                        <h2>Our <span className="text-primary">Video Editing</span> Projects</h2>
                        <p>Showcasing our professional video editing work and creative storytelling</p>
                    </div>
                    <Row className="g-4">
                        {[
                            { id: 1, image: '/images/thumbnail 1.jpg', title: 'Corporate Presentation', category: 'Business' },
                            { id: 2, image: '/images/thumbnail 2.jpg', title: 'Product Showcase', category: 'Commercial' },
                            { id: 3, image: '/images/thumb nail 3.jpg', title: 'Event Highlights', category: 'Event' },
                            { id: 4, image: '/images/thumbnail 4.jpg', title: 'Brand Story', category: 'Branding' },
                            { id: 5, image: '/images/thumbnail 5.jpg', title: 'Educational Content', category: 'Educational' },
                            { id: 6, image: '/images/thumbnail 6.jpg', title: 'Social Media Campaign', category: 'Social Media' },
                            { id: 7, image: '/images/thumbnail 7.jpg', title: 'Documentary Style', category: 'Documentary' },
                        ].map((project, index) => (
                            <Col lg={4} md={6} key={project.id} className="mb-4">
                                <motion.div
                                    className="position-relative overflow-hidden rounded-3 shadow-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="position-relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-100"
                                            style={{
                                                height: '250px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        />
                                        <div
                                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                            style={{
                                                background: 'rgba(0, 0, 0, 0.7)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                                        >
                                            <div className="text-center text-white">
                                                <motion.div
                                                    whileHover={{ scale: 1.2 }}
                                                    className="mb-3"
                                                    style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        background: 'rgba(255, 215, 0, 0.9)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <span style={{ fontSize: '24px' }}>▶</span>
                                                </motion.div>
                                                <h5 className="fw-bold">{project.title}</h5>
                                                <span className="badge bg-primary">{project.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/portfolio" className="btn btn-primary btn-lg px-5 py-3">
                                View Full Portfolio <FaArrowRight className="ms-2" />
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
