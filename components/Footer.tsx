'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/assets/css/Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribing with email:', email);
        setEmail('');
    };

    return (
        <footer className={`${styles['footer-wrapper']}`}>
            <div className={`container`}>

                <div className={`${styles['top-section']}`}>
                    <div className={`${styles['logo-section']}`}>
                        <Link href="/" className={`${styles['logo-link']}`}>
                            <Image
                                src={logo}
                                alt="Ovolve Health logo"
                                width={252}
                                height={64}
                                className={`${styles['logo']}`}
                            />
                        </Link>
                    </div>

                    <div className={`${styles['social-section']}`}>
                        <div className={`${styles['social-icons']}`}>
                            <Link href="#" className={`${styles['social-icon']}`} aria-label="Facebook">
                                <i className='icon-facebook'></i>
                            </Link>
                            <Link href="#" className={`${styles['social-icon']}`} aria-label="Twitter">
                                <i className='icon-twitter'></i>
                            </Link>
                            <Link href="#" className={`${styles['social-icon']}`} aria-label="Instagram">
                                <i className='icon-instagram'></i>
                            </Link>
                            <Link href="#" className={`${styles['social-icon']}`} aria-label="LinkedIn">
                                <i className='icon-linkdian'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles['middle-section']}`}>
                    <div className={`${styles['links-section']}`}>
                        <div className={`${styles['link-column']}`}>
                            <h4>Product</h4>
                            <ul>
                                <li><Link href="#">Features</Link></li>
                                <li><Link href="#">Pricing</Link></li>
                                <li><Link href="#">How It Works</Link></li>
                                <li><Link href="#">Integrations</Link></li>
                            </ul>
                        </div>

                        <div className={`${styles['link-column']}`}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Blogs</Link></li>
                                <li><Link href="#">FAQs</Link></li>
                                <li><Link href="#">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className={`${styles['link-column']}`}>
                            <h4>Get in Touch with us</h4>
                            <ul>
                                <li><Link href="mailto:support@ovolve.com"><i className='icon-mail'></i> support@ovolve.com</Link></li>
                                <li><Link href="tel:(440) 570-7977"><i className='icon-phone'></i> (440) 570-7977</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles['newsletter-card']}`}>
                        <div className={`${styles['newsletter-top-card']}`}>
                            <h4>Fertility Intelligence in Your Inbox.</h4>
                            <p>Join for expert tips and AI-driven fertility updates.</p>
                        </div>

                        <form onSubmit={handleSubscribe} className={`${styles['newsletter-form']}`}>
                            <div className={`${styles['newsletter-row']}`}>
                                <div className={`${styles['newsletter-input-dv']}`}>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`form-control`}
                                        required
                                    />
                                </div>
                                <button type="submit" className={`btn btn-primary btn-h48`}>
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`${styles['bottom-section']}`}>
                    <div className={`${styles['copyright']}`}>
                        Copyright 2025 ©Ovolve. All rights reserved.
                    </div>
                    <ul className={`${styles['legal-links-list']}`}>
                        <li><Link href="#">HIPAA Compliance</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
