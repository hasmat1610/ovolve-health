'use client';

import Image from 'next/image'
import Link from 'next/link';
import heroStyle from '@/assets/css/Hero.module.scss';
import mentalHealth from '@/assets/images/mental-health.svg'
import CircleGraph from '@/assets/images/circle-graph.svg'

const HeroSection = () => {
    return (
        <section className={heroStyle['heroSection']}>
            <div className={heroStyle['heroBackground']}>
                <video className={heroStyle['video']} autoPlay loop muted>
                    <source src="/video/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={`container ${heroStyle['heroContainer']}`}>

                <div className={heroStyle['heroContent']}>
                    <div className={heroStyle['heroLeft']}>

                        <div className={heroStyle['complianceBadge']}>
                            <i className="icon-shield-checkered"></i>
                            <span>HIPAA compliant & secure</span>
                        </div>

                        <div className={heroStyle['herocontentInner']}>
                            <h1>
                                Understand Your Fertility Intelligence
                            </h1>

                            <p>
                                AI-powered insights from your lab data. Get personalized tracking, expert analysis, and evidence-based recommendations to take control of your reproductive health.
                            </p>
                        </div>

                        <div className={heroStyle['heroBottomRow']}>
                            <div className={heroStyle['heroButtons']}>
                                <Link href="#" className="btn btn-primary btn-h48">Start Your Assessment</Link>
                                <Link href="#" className="btn btn-secondary btn-h48"><i className="icon-player-play"></i>
                                    Watch Demo</Link>
                            </div>

                            <div className={heroStyle['heroInfoGrid']}>
                                <div className={heroStyle['heroInfoCard']}>
                                    <div className={heroStyle['heroInfoLeftCard']}>
                                        <h5>AI Insight</h5>
                                        <p>Consider vitamin D</p>
                                    </div>
                                    <div className={heroStyle['heroInfoRightCard']}>
                                        <Image 
                                            src={mentalHealth} 
                                            alt="Mental Health" 
                                            width={67}
                                            height={82}
                                            priority
                                            className={heroStyle['heroImage']}
                                        />
                                    </div>
                                </div>

                                <div className={heroStyle['heroInfoCard']}>
                                    <div className={heroStyle['heroInfoLeftCard']}>
                                        <h3>87</h3>
                                        <h6>Fertility Score</h6>
                                        <p>Consider vitamin D</p>
                                    </div>
                                    <div className={heroStyle['heroInfoRightCard']}>
                                        <Image 
                                            src={CircleGraph} 
                                            alt="Circle Graph" 
                                            width={88}
                                            height={88}
                                            priority
                                            className={heroStyle['heroImage']}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
