import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            position: 'CEO, TechStartup Inc.',
            company: 'TechStartup Inc.',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'PixelHub transformed our online presence completely. Their attention to detail and technical expertise is unmatched. Our website conversion rate increased by 150% after the redesign!',
            project: 'E-Commerce Website Redesign',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 2,
            name: 'Michael Chen',
            position: 'Marketing Director',
            company: 'GrowthCorp',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'The team at PixelHub delivered beyond our expectations. Their digital marketing strategy helped us reach new audiences and our ROI improved by 200%. Highly recommended!',
            project: 'Digital Marketing Campaign',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            position: 'Founder',
            company: 'ArtisanCrafts',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'Working with PixelHub was a game-changer for our small business. They created a beautiful, functional website that perfectly represents our brand. Sales have tripled since launch!',
            project: 'Custom Website Development',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 4,
            name: 'David Wilson',
            position: 'Operations Manager',
            company: 'LogisticsPro',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'The custom dashboard PixelHub built for us streamlined our operations significantly. Real-time data visualization has improved our decision-making process tremendously.',
            project: 'Custom Dashboard Development',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            position: 'Brand Manager',
            company: 'FashionForward',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'PixelHub created an amazing brand identity for us. From logo design to complete brand guidelines, everything was perfectly crafted. Our brand recognition has improved dramatically.',
            project: 'Brand Identity Design',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 6,
            name: 'James Anderson',
            position: 'CTO',
            company: 'FinanceFlow',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'The technical expertise and professionalism of PixelHub is outstanding. They delivered a complex financial platform on time and within budget. Exceptional work!',
            project: 'Financial Platform Development',
            linkedin: '#',
            twitter: '#',
        },
    ];

    const stats = [
        { number: '98%', label: 'Client Satisfaction Rate' },
        { number: '150%', label: 'Average ROI Increase' },
        { number: '24hrs', label: 'Average Response Time' },
        { number: '5★', label: 'Average Rating' },
    ];

    const companies = [
        { name: 'TechCorp', logo: '🏢' },
        { name: 'StartupHub', logo: '🚀' },
        { name: 'DesignStudio', logo: '🎨' },
        { name: 'E-CommerceX', logo: '🛒' },
        { name: 'DigitalFlow', logo: '💻' },
        { name: 'BrandCraft', logo: '✨' },
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
                                Client <span className="text-primary">Testimonials</span>
                            </h1>
                            <p className="lead text-light mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                Don't just take our word for it. Here's what our satisfied clients
                                have to say about working with PixelHub.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Testimonials Grid */}
            <section className="section">
                <Container>
                    <Row>
                        {testimonials.map((testimonial, index) => (
                            <Col lg={4} md={6} key={testimonial.id} className="mb-4">
                                <motion.div
                                    className="card h-100 border-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 215, 0, 0.2)',
                                    }}
                                >
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <FaQuoteLeft className="text-primary me-3" size={30} />
                                            <div className="d-flex">
                                                {[...Array(testimonial.rating)].map((_, starIndex) => (
                                                    <FaStar key={starIndex} className="text-warning" />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-light mb-4 font-italic">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="d-flex align-items-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-circle me-3"
                                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="text-primary mb-1">{testimonial.name}</h6>
                                                <p className="text-light mb-1 small">{testimonial.position}</p>
                                                <p className="text-secondary mb-0 small">{testimonial.company}</p>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <a href={testimonial.linkedin} className="text-primary">
                                                    <FaLinkedin size={18} />
                                                </a>
                                                <a href={testimonial.twitter} className="text-primary">
                                                    <FaTwitter size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <small className="text-secondary">
                                                Project: {testimonial.project}
                                            </small>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="section bg-dark">
                <Container>
                    <div className="section-title">
                        <h2>Our Results Speak</h2>
                        <p>Numbers that demonstrate our commitment to client success</p>
                    </div>
                    <Row>
                        {stats.map((stat, index) => (
                            <Col md={3} key={index} className="mb-4">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="card bg-dark border-primary p-4 h-100">
                                        <h2 className="text-primary fw-bold display-3 mb-2">{stat.number}</h2>
                                        <p className="text-light mb-0">{stat.label}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Trusted By Section */}
            <section className="section">
                <Container>
                    <div className="section-title">
                        <h2>Trusted By Leading Companies</h2>
                        <p>We're proud to work with innovative businesses across various industries</p>
                    </div>
                    <Row className="align-items-center">
                        {companies.map((company, index) => (
                            <Col lg={2} md={4} sm={6} key={index} className="mb-4">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="card bg-dark border-primary p-4">
                                        <div style={{ fontSize: '3rem' }} className="mb-2">
                                            {company.logo}
                                        </div>
                                        <h6 className="text-light mb-0">{company.name}</h6>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Video Testimonial Section */}
            <section className="section bg-dark">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-primary mb-4">What Our Clients Say</h2>
                                <p className="lead text-light mb-4">
                                    "PixelHub doesn't just deliver projects; they deliver solutions that
                                    transform businesses. Their team became an extension of our company."
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
                                        alt="Alex Thompson"
                                        className="rounded-circle me-3"
                                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h6 className="text-primary mb-1">Alex Thompson</h6>
                                        <p className="text-light mb-0 small">CEO, InnovateNow</p>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                className="position-relative"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="card bg-dark border-primary">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                                        alt="Video Testimonial"
                                        className="card-img"
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <motion.button
                                            className="btn btn-primary rounded-circle p-3"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            style={{ width: '80px', height: '80px' }}
                                        >
                                            <span style={{ fontSize: '1.5rem' }}>▶️</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
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
                            <h2 className="text-primary fw-bold mb-4">Ready to Join Our Success Stories?</h2>
                            <p className="lead text-light mb-4">
                                Let's create your success story together. Join the growing list of
                                satisfied clients who trust PixelHub with their digital transformation.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="/contact" className="btn btn-primary btn-lg">
                                    Start Your Project
                                </a>
                                <a href="/portfolio" className="btn btn-outline-primary btn-lg">
                                    View Our Work
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
};

export default Testimonials;
