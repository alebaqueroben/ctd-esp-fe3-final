import Logo from "../assets/DH.png"
import Facebook from  "../assets/ico-facebook.png"
import Instagram from  "../assets/ico-instagram.png"
import TikTok from  "../assets/ico-tiktok.png"
import WhatsApp from  "../assets/ico-whatsapp.png"


const Footer = () => {


  return (
    <footer className="footer">
      <img src= {Logo} alt="" />
      
      <div className="footer">
      <img src={Facebook}alt="" />
        <img src={Instagram} alt="" />
        <img src={TikTok} alt="" />
        <img src={WhatsApp} alt="" />
      </div>  
        
    
    </footer>
  )
}

export default Footer
