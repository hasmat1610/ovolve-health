import Image from 'next/image';
import Card1 from '@/assets/images/hiw1.svg';
import Card2 from '@/assets/images/hiw2.svg';
import Card3 from '@/assets/images/hiw3.svg';
import Card4 from '@/assets/images/hiw4.svg';
import TheScienceStyle from '@/assets/css/TheScience.module.scss';

const TheScienceSection = () => {
  return (
    <section className={`${TheScienceStyle['the-science-section']}`}>
      <div className="container">
        <div className={`${TheScienceStyle['the-science-inner']}`}>
          <div className={`title-div title-center-div2`}>
            <div className='dot-title'><span className='dot'></span> <span className='small-title'>The Science</span> </div>
            <h2>Backed by Science, Powered by <i className='icon-ai'></i></h2>
          </div>

          <div className={`${TheScienceStyle['the-science-root']}`}>
            <div className={`${TheScienceStyle['the-science-card']} ${TheScienceStyle['card1']}`}>
              <div className={`${TheScienceStyle['image-div']}`}>
                <Image src={Card1} alt="Card1" />
              </div>
              <div className={`${TheScienceStyle['content-div']}`}>
                <h4>Fertility Scoring Engine</h4>
                <p>AI-analyzed fertility score based on 15+ clinically validated biomarkers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheScienceSection