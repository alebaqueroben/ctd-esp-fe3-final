import Logo from "../assets/DH.png"
import Facebook from  "../assets/ico-facebook.png"
import Instagram from  "../assets/ico-instagram.png"
import TikTok from  "../assets/ico-tiktok.png"
import WhatsApp from  "../assets/ico-whatsapp.png"
//import { DentistaContext } from '../utils/global.context'; 
//import { useContext } from 'react';

const Footer = () => {
//const {state}  = useContext(DentistaContext);

  return (
    <footer className='div'>

      <img src= {Logo} alt="" />
        <img src={Facebook}alt="" />
        <img src={Instagram} alt="" />
        <img src={TikTok} alt="" />
        <img src={WhatsApp} alt="" />
 
    </footer>
  )
}

export default Footer
