import React, { useState } from 'react';
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import './contact.css';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    destination: string;
    travelDate: string;
    travelers: string;
    message: string;
}

function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        travelers: '1',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);
            
            // Reset form and show success message
            setFormData({
                name: '',
                email: '',
                phone: '',
                destination: '',
                travelDate: '',
                travelers: '1',
                message: ''
            });
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="contact-page">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h1 className="display-4 text-primary">Contact Us</h1>
                            <p className="lead">Let us help you plan your perfect travel experience</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Send us a Message</h3>
                                    
                                    {showSuccess && (
                                        <div className="alert alert-success" role="alert">
                                            <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="name" className="form-label">Full Name *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="email" className="form-label">Email Address *</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+91 9876543210"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="destination" className="form-label">Preferred Destination</label>
                                                <select
                                                    className="form-control"
                                                    id="destination"
                                                    name="destination"
                                                    value={formData.destination}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select a destination</option>
                                                    <option value="india">India Tour</option>
                                                    <option value="dubai">Dubai</option>
                                                    <option value="singapore">Singapore</option>
                                                    <option value="maldives">Maldives</option>
                                                    <option value="thailand">Thailand</option>
                                                    <option value="europe">Europe</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="travelDate" className="form-label">Preferred Travel Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="travelDate"
                                                    name="travelDate"
                                                    value={formData.travelDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="travelers" className="form-label">Number of Travelers</label>
                                                <select
                                                    className="form-control"
                                                    id="travelers"
                                                    name="travelers"
                                                    value={formData.travelers}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="1">1 Person</option>
                                                    <option value="2">2 People</option>
                                                    <option value="3-5">3-5 People</option>
                                                    <option value="6-10">6-10 People</option>
                                                    <option value="10+">10+ People</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message *</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your travel preferences, budget, special requirements, etc..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="btn btn-primary btn-lg px-5"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Get in Touch</h3>
                                    
                                    <div className="contact-info">
                                        <div className="info-item mb-4">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="fas fa-map-marker-alt text-primary me-3"></i>
                                                <h5 className="mb-0">Address</h5>
                                            </div>
                                            <p className="ms-4 text-muted">
                                                Pole No. 45, Village Khaira<br/>
                                                Najafgarh, New Delhi<br/>
                                                India - 110043
                                            </p>
                                        </div>

                                        <div className="info-item mb-4">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="fas fa-phone text-primary me-3"></i>
                                                <h5 className="mb-0">Phone</h5>
                                            </div>
                                            <p className="ms-4">
                                                <a href="tel:+918587097108" className="text-decoration-none">
                                                    +91 8587097108
                                                </a>
                                            </p>
                                        </div>

                                        <div className="info-item mb-4">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="fas fa-envelope text-primary me-3"></i>
                                                <h5 className="mb-0">Email</h5>
                                            </div>
                                            <p className="ms-4">
                                                <a href="mailto:spsvtravel@gmail.com" className="text-decoration-none">
                                                    spsvtravel@gmail.com
                                                </a>
                                            </p>
                                        </div>

                                        <div className="info-item mb-4">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="fas fa-clock text-primary me-3"></i>
                                                <h5 className="mb-0">Business Hours</h5>
                                            </div>
                                            <p className="ms-4 text-muted">
                                                Monday - Saturday: 9:00 AM - 7:00 PM<br/>
                                                Sunday: 10:00 AM - 6:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="mb-3">Why Choose SPSV Travels?</h5>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="fas fa-check text-success me-2"></i>
                                                20+ Years Experience
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check text-success me-2"></i>
                                                Customized Tour Packages
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check text-success me-2"></i>
                                                24/7 Customer Support
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check text-success me-2"></i>
                                                Best Price Guarantee
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Contact;