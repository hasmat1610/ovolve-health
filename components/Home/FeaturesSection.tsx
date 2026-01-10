import Image from 'next/image'
import FeatureImg from '@/assets/images/feature-img.jpg'
import Icon1 from '@/assets/images/upload-to-cloud.svg'
import Icon2 from '@/assets/images/brain.svg'
import Icon3 from '@/assets/images/bar-chart.svg'
import Icon4 from '@/assets/images/statistic.svg'
import Icon5 from '@/assets/images/read.svg'

import FeaturesStyle from '@/assets/css/Features.module.scss';

const FeaturesSection = () => {
    return (
        <section className={`${FeaturesStyle['features-section']}`}>
            <div className="container">
                <div className={`${FeaturesStyle['features-inner']}`}>
                    <div className={`${FeaturesStyle['feature-left-item']}`}>
                        <div className={`title-div title-left-div`}>
                            <div className='dot-title'><span className='dot'></span> <span className='small-title'>Features</span> </div>
                            <h2>Comprehensive Fertility Intelligence</h2>
                            <p>Everything you need to understand and optimize your reproductive health.</p>
                        </div>

                        <div className={`${FeaturesStyle['feature-image']}`}>
                            <Image
                                src={FeatureImg}
                                alt="Features"
                                width={598}
                                height={376}
                                priority
                                className={FeaturesStyle['features-img']}
                            />
                        </div>
                    </div>

                    <div className={`${FeaturesStyle['feature-right-item']}`}>

                        {[
                            {
                                src: Icon1,
                                alt: 'Lab Data Upload',
                                title: 'Upload lab results from any provider and let our AI automatically extract and normalize biomarkers.',
                            },
                            {
                                src: Icon2,
                                alt: 'AI-Powered Insights',
                                title: 'Get personalized fertility scoring, biological clock predictions, and risk assessments.',
                            },
                            {
                                src: Icon3,
                                alt: 'Personalized Fertility Dashboard',
                                title: 'Explore your fertility score, biomarkers, and recommendations in one smart, interactive dashboard.',
                            },
                            {
                                src: Icon4,
                                alt: 'Symptom & Cycle Tracking',
                                title: 'Track symptoms, cycle patterns, mood, and energy. Correlate with lab data for deeper insights.',
                            },
                            {
                                src: Icon5,
                                alt: 'Educational Content Hub',
                                title: 'Access curated articles, video library with expert interviews, and comprehensive glossary.',
                            },
                        ].map((item, index) => (
                            <div key={index} className={`${FeaturesStyle['feature-card']}`}>
                                <div className={`${FeaturesStyle['feature-icon-card']}`}>
                                    <Image 
                                        src={item.src} 
                                        alt={item.alt} 
                                        width={64}
                                        height={64}
                                        priority
                                        className={FeaturesStyle['icon-img']}
                                    />
                                </div>
                                <div className={`${FeaturesStyle['feature-content-card']}`}>
                                    <h5>{item.alt}</h5>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection