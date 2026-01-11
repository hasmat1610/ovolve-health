import Image from 'next/image';
import Card1 from '@/assets/images/hiw1.svg';
import Card2 from '@/assets/images/hiw2.svg';
import Card3 from '@/assets/images/hiw3.svg';
import Card4 from '@/assets/images/hiw4.svg';
import HowItWorksStyle from '@/assets/css/HowItWorks.module.scss';
import Link from 'next/link';

const HowItWorksSection = () => {
  return (
    <section className={`${HowItWorksStyle['hiw-section']}`}>
      <div className="container">
        <div className={`${HowItWorksStyle['hiw-inner']}`}>
          <div className={`title-div title-center-div`}>
            <div className='dot-title'><span className='dot'></span> <span className='small-title'>How It Works</span> </div>
            <h2>Your Journey to Fertility Intelligence</h2>
            <p>Simple, secure, and scientifically backed.</p>
          </div>
          
          <div className={`${HowItWorksStyle['hiw-root']}`}>
            {[
              {
                src: Card1,
                badgeText: 'Join',
                title: 'Create Account',
                desc: 'HIPAA-compliant secure registration with multi-factor authentication and encrypted data storage.'
              },
              {
                src: Card2,
                badgeText: 'Evaluate',
                title: 'Complete Assessment',
                desc: '44-question comprehensive intake questionnaire covering lifestyle, cycle history, and family history.'
              },
              {
                src: Card3,
                badgeText: 'Submit',
                title: 'Upload Lab Data',
                desc: 'Upload recent lab results or order new labs. AI extracts key biomarkers including AMH, FSH, Estradiol, and more.'
              },
              {
                src: Card4,
                badgeText: 'Results',
                title: 'Get Your Insights',
                desc: 'Receive your fertility score, biological clock predictions, personalized action plan, and comprehensive report.'
              }
            ].map((item, index) => (
              <div key={index} className={`${HowItWorksStyle['hiw-row']}`}>
                <div className={`${HowItWorksStyle['hiw-col1']}`}>
                  <div className={`${HowItWorksStyle['hiw-number']}`}>
                    <span className={`${HowItWorksStyle['number']}`}>{index + 1}</span>
                  </div>
                  <div className={`${HowItWorksStyle['hiw-text']}`}>
                    <span className={`${HowItWorksStyle['hiw-text-span']}`}>{item.badgeText}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className={`${HowItWorksStyle['hiw-col2']}`}>
                  <Image src={item.src} alt={item.title} className={`${HowItWorksStyle['img-card']}`} width={372} height={196} />
                </div>
                <div className={`${HowItWorksStyle['hiw-col3']}`}>
                  <div className={`${HowItWorksStyle['hiw-desc']}`}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>

          <div className={`${HowItWorksStyle['hiw-btn']}`}>
            <Link href="#" className="btn btn-primary btn-h48">Start Your Assessment</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection;