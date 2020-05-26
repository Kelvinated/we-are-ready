import React from "react"
import Styles from './VideoBg.module.scss'
import { Link } from 'gatsby'

const VideoBg = () => {
  return (
    <div id={Styles.fullwidthVideo}>
        <div className={Styles.fullwidthVideoBg}>
            <video autoPlay muted loop volume="">
                <source src="https://weareready-consultancy.oss-cn-shanghai.aliyuncs.com/bg-wrr.mp4" type='video/mp4;'/>
            </video>
        </div>
        <div className={Styles.headerOverlay}>
            <div className={Styles.headerContent}>
                <h1>Ready to launch your products in China?</h1>
                <p>We're China's leading sales agency, driving growth for consumer electronics brands</p>
                <Link duration={1} className={Styles.btn} cover bg="#1d1d1d" to='/about/'>
                    Find out more
                </Link>
            </div>
        </div>
    </div>
  )
}
export default VideoBg
