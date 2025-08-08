import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaRocket,
    FaUsers,
    FaLightbulb,
    FaHeart,
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaGitAlt,
    FaFigma
} from 'react-icons/fa';
import {
    SiTypescript,
    SiMongodb,
    SiNextdotjs,
    SiFramer,
    SiShopify
} from 'react-icons/si'; const About: React.FC = () => {
    const values = [
        {
            icon: FaRocket,
            title: 'Innovation',
            description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
        },
        {
            icon: FaUsers,
            title: 'Collaboration',
            description: 'We work closely with our clients to ensure their vision becomes reality.',
        },
        {
            icon: FaLightbulb,
            title: 'Creativity',
            description: 'Every project is approached with fresh ideas and unique design perspectives.',
        },
        {
            icon: FaHeart,
            title: 'Passion',
            description: 'We are passionate about helping businesses succeed in the digital world.',
        },
    ];

    const team = [
        {
            name: 'Sheikh Hamza ',
            role: 'HR EXECUTIVE',
            image: '/ceo 1.jpg',
            description: 'Visionary leader and digital strategist with expertise in modern web technologies and business development.',
            techStack: [
                { icon: FaReact, name: 'React' },
                { icon: SiNextdotjs, name: 'Next.js' },
                { icon: SiTypescript, name: 'TypeScript' },
                { icon: FaNodeJs, name: 'Node.js' },
                { icon: SiMongodb, name: 'MongoDB' },
                { icon: FaGitAlt, name: 'Git' }
            ]
        },
        {
            name: 'Umara Munir',
            role: 'Co Founder & CEO',
            image: '/ceo 2.jpg',
            description: 'Strategic operations leader focused on team development and organizational excellence.',
            techStack: [
                { icon: FaUsers, name: 'Leadership' },
                { icon: FaHeart, name: 'Team Building' },
                { icon: FaRocket, name: 'Growth' },
                { icon: FaLightbulb, name: 'Innovation' },
                { icon: SiFramer, name: 'Process' },
                { icon: FaBootstrap, name: 'Systems' }
            ]
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '120px' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="display-3 fw-bold mb-4">
                                    About <span className="text-primary">Pixel</span>
                                    <span className="text-secondary">Hub</span>
                                </h1>
                                <p className="lead text-light mb-4">
                                    We are a passionate team of digital experts dedicated to transforming
                                    businesses through innovative web solutions, stunning designs, and
                                    strategic digital marketing.
                                </p>
                                <p className="text-light mb-4">
                                    Founded in 2019, PixelHub has grown from a small startup to a trusted
                                    digital agency serving clients worldwide. Our mission is to bridge the
                                    gap between technology and business success, creating digital experiences
                                    that not only look amazing but drive real results.
                                </p>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="position-relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                        alt="Team collaboration"
                                        className="img-fluid rounded"
                                        style={{
                                            filter: 'brightness(0.8)',
                                            border: '3px solid var(--primary-color)'
                                        }}
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <h3 className="text-white fw-bold">5+ Years</h3>
                                            <p className="text-white">of Excellence</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Values Section */}
            <section className="section bg-dark">
                <Container>
                    <div className="section-title">
                        <h2>Our Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <Row>
                        {values.map((value, index) => (
                            <Col lg={3} md={6} key={index} className="mb-4">
                                <motion.div
                                    className="card h-100 text-center hover-glow"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <value.icon size={50} className="text-primary" />
                                        </div>
                                        <h4 className="text-primary mb-3">{value.title}</h4>
                                        <p className="text-light">{value.description}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="section">
                <Container>
                    <div className="section-title">
                        <h2>Our Leadership</h2>
                        <p>Meet the visionary minds behind PixelHub's success</p>
                    </div>
                    <Row className="justify-content-center">
                        {team.map((member, index) => (
                            <Col lg={5} md={6} key={index} className="mb-4">
                                <motion.div
                                    className="card h-100 hover-glow"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="card-body text-center">
                                        <motion.img
                                            src={member.image}
                                            alt={member.name}
                                            className="rounded-circle mb-3"
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                objectFit: 'cover',
                                                border: '3px solid var(--primary-color)'
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <h4 className="text-primary mb-2">{member.name}</h4>
                                        <h6 className="text-secondary mb-3">{member.role}</h6>
                                        <p className="text-light mb-4">{member.description}</p>

                                        {/* Tech Stack */}
                                        <div className="tech-stack">
                                            <h6 className="text-primary mb-3">Tech Stack</h6>
                                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                                {member.techStack.map((tech, techIndex) => (
                                                    <motion.div
                                                        key={techIndex}
                                                        className="tech-item"
                                                        whileHover={{ scale: 1.2, y: -5 }}
                                                        transition={{ duration: 0.2 }}
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            padding: '10px',
                                                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                                                            borderRadius: '10px',
                                                            border: '1px solid rgba(255, 215, 0, 0.3)',
                                                            minWidth: '60px'
                                                        }}
                                                    >
                                                        <tech.icon
                                                            size={24}
                                                            className="text-primary mb-1"
                                                        />
                                                        <small className="text-light" style={{ fontSize: '0.7rem' }}>
                                                            {tech.name}
                                                        </small>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Tech Stack Section */}
            <section className="section bg-dark">
                <Container>
                    <div className="section-title">
                        <h2>Our Technology Stack</h2>
                        <p>Cutting-edge tools and technologies we use to deliver exceptional results</p>
                    </div>
                    <Row>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <FaReact size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">React</h5>
                                    <p className="text-light small">Modern UI Library</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <SiNextdotjs size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">Next.js</h5>
                                    <p className="text-light small">Full-Stack Framework</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <SiTypescript size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">TypeScript</h5>
                                    <p className="text-light small">Type-Safe Development</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <FaNodeJs size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">Node.js</h5>
                                    <p className="text-light small">Backend Development</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <SiMongodb size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">MongoDB</h5>
                                    <p className="text-light small">Database Solution</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <SiShopify size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">Shopify</h5>
                                    <p className="text-light small">E-Commerce Platform</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <FaFigma size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">Figma</h5>
                                    <p className="text-light small">Design & Prototyping</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className="mb-4">
                            <motion.div
                                className="card h-100 text-center hover-glow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    <SiFramer size={60} className="text-primary mb-3" />
                                    <h5 className="text-primary">Framer Motion</h5>
                                    <p className="text-light small">Animations</p>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="section bg-dark">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-primary mb-4">Our Mission</h2>
                                <p className="lead text-light mb-4">
                                    To empower businesses with cutting-edge digital solutions that drive
                                    growth, enhance user experiences, and create lasting impact in the
                                    digital landscape.
                                </p>
                                <p className="text-light mb-4">
                                    We believe that every business deserves a strong digital presence.
                                    Our team combines technical expertise with creative vision to deliver
                                    solutions that not only meet but exceed expectations.
                                </p>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="row text-center">
                                    <div className="col-6 mb-4">
                                        <h3 className="text-primary fw-bold display-4">100+</h3>
                                        <p className="text-light">Projects Delivered</p>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <h3 className="text-primary fw-bold display-4">50+</h3>
                                        <p className="text-light">Happy Clients</p>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <h3 className="text-primary fw-bold display-4">24/7</h3>
                                        <p className="text-light">Support</p>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <h3 className="text-primary fw-bold display-4">99%</h3>
                                        <p className="text-light">Satisfaction Rate</p>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;
