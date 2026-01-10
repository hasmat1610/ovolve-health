import Image from 'next/image';
import Map from '@/assets/images/map.svg'
import Icon1 from '@/assets/images/like-matc.svg'
import Icon2 from '@/assets/images/smiley.svg'
import Icon3 from '@/assets/images/shield-security.svg'
import Icon4 from '@/assets/images/star.svg'
import trustedBackedStyle from '@/assets/css/TrustedBacked.module.scss';

const TrustedBackedSection = () => {
    return (<>
        <section className={`${trustedBackedStyle['trusted-backed-section']}`}>
            <div className="container">
                <div className={`${trustedBackedStyle['trusted-backed-inner']}`}>
                    <div className={`${trustedBackedStyle['trusted-card']}`}>
                        <div className={`${trustedBackedStyle['trusted-top']}`}>
                            <Image 
                                src={Map} 
                                alt="Map" 
                                width={370}
                                height={140}
                                priority
                                className={trustedBackedStyle['map-img']}
                            />
                        </div>
                        <div className={`${trustedBackedStyle['trusted-heading']}`}>
                            <h3>Trusted by Thousands, <br /> Backed by Science.</h3>
                        </div>
                    </div>

                    <div className={`${trustedBackedStyle['tb-root']}`}>
                        {[
                            {
                                src: Icon1,
                                NumberTitle: '10,000+',
                                alt: 'Women Empowered',
                                title: 'Women <br /> Empowered'
                            },
                            {
                                src: Icon2,
                                NumberTitle: '98%',
                                alt: 'Satisfaction Rate',
                                title: 'Satisfaction <br /> Rate'
                            },
                            {
                                src: Icon3,
                                NumberTitle: 'HIPAA',
                                alt: 'Compliant Security',
                                title: 'Compliant <br /> Security'
                            },
                            {
                                src: Icon4,
                                NumberTitle: '4.9',
                                alt: 'User Rating',
                                title: 'User <br /> Rating'
                            }
                        ].map((item, index) => (
                            <div key={index} className={`${trustedBackedStyle['tb-card']}`}>
                                <div className={`${trustedBackedStyle['tb-top-card']}`}>
                                    <h3>{item.NumberTitle}</h3>
                                </div>
                                <div className={`${trustedBackedStyle['tb-bottom-card']}`}>
                                    <Image 
                                        src={item.src} 
                                        alt={item.alt} 
                                        width={64}
                                        height={64}
                                        priority
                                        className={trustedBackedStyle['icon-img']}
                                    />
                                    <p dangerouslySetInnerHTML={{__html: item.title}}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default TrustedBackedSection;