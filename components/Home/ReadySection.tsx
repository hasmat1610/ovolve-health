import Link from "next/link"
import Image from "next/image";
import ReadyStyle from '@/assets/css/Ready.module.scss';
import ReadyImg from '@/assets/images/ready-bg.jpg'

const ReadySection = () => {
    return (
        <>
            <section className={`${ReadyStyle['ready-section']} container`}>
                <div className={ReadyStyle['ready-inner']}>
                    <div className={ReadyStyle['ready-bg-img']}>
                        <Image
                            src={ReadyImg}
                            alt="Ready"
                            width={1296}
                            height={428}
                            priority
                            className={ReadyStyle['img-bg']}
                        />
                    </div>

                    <div className={ReadyStyle['ready-row']}>
                        <div className={ReadyStyle['ready-left-dv']}>
                            <div className={ReadyStyle['ready-content-dv']}>
                                <h2>Ready to Take Control of Your Fertility Journey?</h2>
                                <p>Join thousands of women who've gained clarity about their reproductive health.</p>
                            </div>
                            <div className={ReadyStyle['ready-buttons']}>
                                <Link href="#" className="btn btn-primary btn-h48">Start Your Assessment</Link>
                                <Link href="#" className={`${ReadyStyle['btn-secondary']} btn btn-secondary btn-h48`}><i className="icon-player-play"></i>
                                    Watch Demo</Link>
                            </div>
                        </div>

                        <div className={ReadyStyle['row-card-list']}>
                            <div className={ReadyStyle['card-white-list']}><i className="icon-coins"></i><span>7-day money-back guarantee</span></div>
                            <div className={ReadyStyle['card-white-list']}><i className="icon-shield-checkered"></i><span>HIPAA compliant & secure</span></div>
                            <div className={ReadyStyle['card-white-list']}><i className="icon-credit-card"></i><span>No credit card required</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReadySection