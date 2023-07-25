import { useNavigate } from 'react-router-dom';
import {landing, toHomeButton, landingTitle} from "./Landing.module.css"

function Landing() {
  const navigate = useNavigate()

  return (
    <div className={landing}>
      
        <h1 className={landingTitle}>Ready to explore the world ?</h1>
       
        <button className={toHomeButton} onClick={()=> navigate('/home')}><span>Let´s Go</span></button>

       
      
    </div>
  )
}

export default Landing;