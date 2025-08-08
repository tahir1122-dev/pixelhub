import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
// import emailjs from '@emailjs/browser';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane
} from 'react-icons/fa';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            // EmailJS configuration for sending emails to pixelhub714@gmail.com
            // const templateParams = {
            //     from_name: formData.name,
            //     from_email: formData.email,
            //     subject: formData.subject || 'New Contact Form Submission',
            //     message: formData.message,
            //     to_email: 'pixelhub714@gmail.com',
            //     to_name: 'PixelHub Team',
            // };

            // For now, we'll simulate the email sending
            // To actually send emails, you need to:
            // 1. Create an EmailJS account at https://www.emailjs.com/
            // 2. Set up your email service (Gmail, Outlook, etc.)
            // 3. Create a template
            // 4. Replace the placeholder values below with your actual EmailJS credentials

            await new Promise(resolve => setTimeout(resolve, 2000));

            // Uncomment and configure when you have EmailJS credentials:
            // import emailjs from '@emailjs/browser';
            // emailjs.init('YOUR_PUBLIC_KEY');
            // await emailjs.send(
            //   'YOUR_SERVICE_ID',
            //   'YOUR_TEMPLATE_ID',
            //   templateParams,
            //   'YOUR_PUBLIC_KEY'
            // );

            toast.success('Message sent successfully! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Email sending failed:', error);
            toast.error('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'pixelhub714@gmail.com',
            link: 'mailto:pixelhub714@gmail.com',
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+92 318 0732632',
            link: 'tel:+923180732632',
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Address',
            value: '92B Block Shadab Colony Road, Sherwani Housing Scheme, Lahore',
            link: '#',
        },
        {
            icon: FaClock,
            title: 'Business Hours',
            value: 'Mon - Fri: 9:00 AM - 6:00 PM',
            link: '#',
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
                                Get In <span className="text-primary">Touch</span>
                            </h1>
                            <p className="lead text-light mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                Ready to start your next project? Let's discuss how we can help
                                bring your digital vision to life.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Contact Form and Info */}
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8} className="mb-5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="card bg-dark border-primary p-4">
                                    <h3 className="text-primary mb-4">Send Us a Message</h3>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-light">Name *</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your Name"
                                                        required
                                                        style={{
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            border: '1px solid rgba(255, 215, 0, 0.3)',
                                                            color: 'white',
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-light">Email *</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your.email@example.com"
                                                        required
                                                        style={{
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            border: '1px solid rgba(255, 215, 0, 0.3)',
                                                            color: 'white',
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-light">Subject</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Project Inquiry"
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                                    color: 'white',
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-light">Message *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project..."
                                                required
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                                    color: 'white',
                                                    resize: 'vertical',
                                                }}
                                            />
                                        </Form.Group>
                                        <motion.button
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            disabled={isLoading}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="loading me-2"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <FaPaperPlane className="ms-2" />
                                                </>
                                            )}
                                        </motion.button>
                                    </Form>
                                </div>
                            </motion.div>
                        </Col>

                        <Col lg={4}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-primary mb-4">Contact Information</h3>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        className="card mb-3 bg-dark border-primary"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="card-body p-3">
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                                                        color: 'var(--dark-bg)',
                                                    }}
                                                >
                                                    <info.icon size={20} />
                                                </div>
                                                <div>
                                                    <h6 className="text-primary mb-1">{info.title}</h6>
                                                    <p className="text-light mb-0 small">{info.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                <div className="card bg-dark border-primary mt-4">
                                    <div className="card-body p-4 text-center">
                                        <h5 className="text-primary mb-3">Quick Response</h5>
                                        <p className="text-light mb-3">
                                            We typically respond to all inquiries within 2 hours during
                                            business hours.
                                        </p>
                                        <div className="text-primary fw-bold">
                                            Average Response Time: 1 Hour
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="section bg-dark">
                <Container>
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions</p>
                    </div>
                    <Row>
                        {[
                            {
                                question: 'How long does a typical project take?',
                                answer: 'Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex e-commerce solutions may take 6-12 weeks.',
                            },
                            {
                                question: 'Do you provide ongoing support?',
                                answer: 'Yes! We offer various support packages including maintenance, updates, security monitoring, and technical assistance.',
                            },
                            {
                                question: 'What is your development process?',
                                answer: 'We follow a structured 6-step process: Discovery, Strategy, Design, Development, Launch, and ongoing Support.',
                            },
                            {
                                question: 'Can you work with existing websites?',
                                answer: 'Absolutely! We can redesign, optimize, or add new features to existing websites and applications.',
                            },
                        ].map((faq, index) => (
                            <Col md={6} key={index} className="mb-4">
                                <motion.div
                                    className="card h-100 bg-dark border-primary"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="card-body">
                                        <h5 className="text-primary mb-3">{faq.question}</h5>
                                        <p className="text-light mb-0">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;
