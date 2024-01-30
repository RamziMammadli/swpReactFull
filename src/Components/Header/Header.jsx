import React from 'react'
import styles from './header.module.css'
import { ReadMoreBtn } from '../Buttons/ReadMoreBtn'
const Header = () => {
  return (
    <div className={styles.container}>
        <ReadMoreBtn text='RRamzi' bgcolor='red' color='white' omn/>
        <ReadMoreBtn text='adsnasd' bgcolor='blue' color='black'/>
        <ReadMoreBtn text='das' bgcolor='orange' color='red'/>
    </div>
  )
}

export default Header