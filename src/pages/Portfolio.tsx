import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'ecommerce', name: 'E-Commerce' },
        { id: 'design', name: 'Design' },
        { id: 'marketing', name: 'Marketing' },
    ];

    const projects = [
        {
            id: 1,
            title: 'TechCorp Website',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            description: 'Modern corporate website with advanced animations and responsive design.',
            technologies: ['React', 'TypeScript', 'Framer Motion'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 2,
            title: 'FashionStore E-Commerce',
            category: 'ecommerce',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            description: 'Full-featured online fashion store with payment integration and inventory management.',
            technologies: ['Shopify', 'Liquid', 'JavaScript'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 3,
            title: 'Restaurant Brand Identity',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
            description: 'Complete brand identity design including logo, menu design, and marketing materials.',
            technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 4,
            title: 'Social Media Campaign',
            category: 'marketing',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            description: 'Viral social media campaign that increased engagement by 300%.',
            technologies: ['Facebook Ads', 'Instagram', 'Analytics'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 5,
            title: 'FinTech Dashboard',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            description: 'Complex financial dashboard with real-time data visualization.',
            technologies: ['React', 'D3.js', 'Node.js'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 6,
            title: 'Luxury Jewelry Store',
            category: 'ecommerce',
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
            description: 'High-end jewelry e-commerce site with virtual try-on features.',
            technologies: ['WooCommerce', 'WordPress', 'Custom Plugins'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 7,
            title: 'Fitness App UI/UX',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
            description: 'Mobile app design for fitness tracking with intuitive user interface.',
            technologies: ['Figma', 'Principle', 'Sketch'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 8,
            title: 'B2B Lead Generation',
            category: 'marketing',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            description: 'Comprehensive lead generation campaign for B2B software company.',
            technologies: ['Google Ads', 'LinkedIn', 'HubSpot'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 9,
            title: 'Real Estate Platform',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
            description: 'Property listing platform with advanced search and filtering capabilities.',
            technologies: ['Next.js', 'PostgreSQL', 'Mapbox'],
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

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
                                Our <span className="text-primary">Portfolio</span>
                            </h1>
                            <p className="lead text-light mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                Explore our latest projects and see how we've helped businesses
                                achieve their digital goals through innovative solutions.
                            </p>
                        </motion.div>
                    </div>

                    {/* Filter Navigation */}
                    <motion.div
                        className="text-center mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Nav className="justify-content-center flex-wrap">
                            {categories.map((category) => (
                                <Nav.Item key={category.id}>
                                    <motion.button
                                        className={`nav-link btn border-0 mx-2 mb-2 ${activeFilter === category.id
                                            ? 'btn-primary'
                                            : 'btn-outline-primary'
                                            }`}
                                        onClick={() => setActiveFilter(category.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {category.name}
                                    </motion.button>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </motion.div>
                </Container>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <Container>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Row>
                                {filteredProjects.map((project, index) => (
                                    <Col lg={4} md={6} key={project.id} className="mb-4">
                                        <motion.div
                                            className="card h-100 border-0 overflow-hidden"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ y: -10 }}
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 215, 0, 0.2)',
                                            }}
                                        >
                                            <div className="position-relative overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="card-img-top"
                                                    style={{ height: '250px', objectFit: 'cover' }}
                                                />
                                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-all"
                                                    style={{
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        transition: 'opacity 0.3s ease',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.opacity = '1';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.opacity = '0';
                                                    }}
                                                >
                                                    <div className="d-flex gap-3">
                                                        <motion.a
                                                            href={project.liveUrl}
                                                            className="btn btn-primary btn-sm"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <FaEye />
                                                        </motion.a>
                                                        <motion.a
                                                            href={project.githubUrl}
                                                            className="btn btn-outline-primary btn-sm"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <FaGithub />
                                                        </motion.a>
                                                        <motion.a
                                                            href={project.liveUrl}
                                                            className="btn btn-secondary btn-sm"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <FaExternalLinkAlt />
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body p-4">
                                                <h4 className="text-primary mb-2">{project.title}</h4>
                                                <p className="text-light mb-3">{project.description}</p>
                                                <div className="d-flex flex-wrap gap-2 mb-3">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="badge"
                                                            style={{
                                                                background: 'rgba(255, 215, 0, 0.2)',
                                                                color: 'var(--primary-color)',
                                                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                                            }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <a
                                                        href={project.liveUrl}
                                                        className="btn btn-primary btn-sm flex-fill"
                                                    >
                                                        View Live
                                                    </a>
                                                    <a
                                                        href={project.githubUrl}
                                                        className="btn btn-outline-primary btn-sm flex-fill"
                                                    >
                                                        View Code
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            className="text-center py-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-light">No projects found in this category.</h3>
                            <p className="text-light">Try selecting a different filter.</p>
                        </motion.div>
                    )}
                </Container>
            </section>

            {/* Stats Section */}
            <section className="section bg-dark">
                <Container>
                    <Row className="text-center">
                        {[
                            { number: '100+', label: 'Projects Completed', icon: '🎯' },
                            { number: '50+', label: 'Happy Clients', icon: '😊' },
                            { number: '5+', label: 'Years Experience', icon: '⭐' },
                            { number: '24/7', label: 'Support Available', icon: '🚀' },
                        ].map((stat, index) => (
                            <Col md={3} key={index} className="mb-4">
                                <motion.div
                                    className="card bg-dark border-primary p-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div style={{ fontSize: '3rem' }} className="mb-3">
                                        {stat.icon}
                                    </div>
                                    <h2 className="text-primary fw-bold display-4 mb-2">{stat.number}</h2>
                                    <p className="text-light mb-0">{stat.label}</p>
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
                            <h2 className="text-primary fw-bold mb-4">Ready to Start Your Project?</h2>
                            <p className="lead text-light mb-4">
                                Let's work together to create something amazing. Our team is ready
                                to bring your vision to life with cutting-edge technology and creative design.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="/contact" className="btn btn-primary btn-lg">
                                    Start Your Project
                                </a>
                                <a href="/services" className="btn btn-outline-primary btn-lg">
                                    View Services
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
};

export default Portfolio;
