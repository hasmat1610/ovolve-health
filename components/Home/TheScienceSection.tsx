import Image from 'next/image';
import Card1 from '@/assets/images/the-science1.jpg';
import Card2 from '@/assets/images/the-science3.jpg';
import Card3 from '@/assets/images/the-science2.jpg';
import CircleGraph from '@/assets/images/circle-graph2.svg';
import dnaImage from '@/assets/images/dna.svg';
import TheScienceStyle from '@/assets/css/TheScience.module.scss';

const TheScienceSection = () => {
  const analysisPoints = [
    {
      icon: <i className="icon-check-fill"><span className="path1"></span><span className="path2"></span></i>,
      text: 'Ovarian reserve: Excellent for age 32'
    },
    {
      icon: <i className="icon-check-fill"><span className="path1"></span><span className="path2"></span></i>,
      text: 'Hormonal balance: Optimal'
    },
    {
      icon: <i className="icon-check-fill"><span className="path1"></span><span className="path2"></span></i>,
      text: 'Thyroid function: Normal'
    },
    {
      icon: <i className="icon-alert-triangle text-red"></i>,
      text: 'Vitamin D: Consider supplementation'
    }
  ];

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
                <Image src={Card1} alt="Fertility Scoring Engine" width={416} height={528} className={`${TheScienceStyle['image']}`} />
              </div>
              <div className={`${TheScienceStyle['content-div']}`}>
                <h5>Fertility Scoring Engine</h5>
                <p>AI-analyzed fertility score based on 15+ clinically validated biomarkers.</p>
              </div>
            </div>

            <div className={`${TheScienceStyle['the-science-card']} ${TheScienceStyle['card2']}`}>
              <div className={`${TheScienceStyle['image-div']}`}>
                <Image src={Card2} alt="Biological Clock Predictor" width={416} height={186} className={`${TheScienceStyle['image']}`} />
              </div>
              <div className={`${TheScienceStyle['content-div']}`}>
                <h5>Biological Clock Predictor</h5>
                <p>Predicts ovarian reserve and menopause timeline with 85%+ accuracy.</p>
              </div>
            </div>

            <div className={`${TheScienceStyle['the-science-card']} ${TheScienceStyle['card3']}`}>
              <div className={`${TheScienceStyle['image-div']}`}>
                <Image src={Card3} alt="Reproductive Risk Assessment" width={416} height={186} className={`${TheScienceStyle['image']}`} />
              </div>
              <div className={`${TheScienceStyle['content-div']}`}>
                <h5>Reproductive Risk Assessment</h5>
                <p>Detects early patterns of PCOS, endometriosis, and thyroid risk.</p>
              </div>
            </div>

            <div className={`${TheScienceStyle['the-science-card']} ${TheScienceStyle['card4']}`}>
              <div className={`${TheScienceStyle['analysis-card']}`}>
                <h3><i className='icon-ai'></i> Analysis</h3>
                <div className={`${TheScienceStyle['analysis-inner-card']}`}>
                  <div className={`${TheScienceStyle['analysis-inner-left']}`}>
                    <ul>
                      {analysisPoints.map((point, index) => (
                        <li key={index}>
                          <span className={`${TheScienceStyle['analysis-icon']}`}>{point.icon}</span>
                          <span className={`${TheScienceStyle['analysis-text']}`}>{point.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${TheScienceStyle['analysis-inner-right']}`}>
                    <div className={TheScienceStyle['analysis-white-card']}>
                      <div className={TheScienceStyle['analysis-white-left']}>
                        <h4>87<small>/100</small></h4>
                        <p>Fertility Score</p>
                      </div>
                      <div className={TheScienceStyle['analysis-white-right']}>
                        <Image
                          src={CircleGraph}
                          alt="Circle Graph"
                          width={64}
                          height={64}
                          priority
                          className={TheScienceStyle['analysis-image']}
                        />
                      </div>
                    </div>

                    <div className={TheScienceStyle['analysis-white-card']}>
                      <div className={TheScienceStyle['analysis-white-left']}>
                        <h4>10–14 yrs</h4>
                        <p>Predicted fertility window</p>
                      </div>
                      <div className={TheScienceStyle['analysis-white-right']}>
                        <Image
                          src={dnaImage}
                          alt="DNA"
                          width={64}
                          height={64}
                          priority
                          className={TheScienceStyle['analysis-image']}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheScienceSection