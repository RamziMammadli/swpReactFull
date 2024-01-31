import React from 'react'
import styles from './header.module.css'
import { ReadMoreBtn } from '../Buttons/ReadMoreBtn'
import { useNavigate } from 'react-router'


const Header = () => {
const navigation = useNavigate()
  const goProfile = () => {
    navigation('profile')
  }

  return (
    <div className={styles.container}>
        <ReadMoreBtn text='PROFILE' bgcolor='red' color='white' onclick={goProfile}/>
        <ReadMoreBtn text='adsnasd' bgcolor='blue' color='black'/>
        <ReadMoreBtn text='das' bgcolor='orange' color='red'/>
    </div>
  )
}

export default Header