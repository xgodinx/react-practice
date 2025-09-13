import logo from '/src/assets/react.svg'
import logoVit from '/public/vite.svg'
import { useEffect, useState } from 'react'


type ImgAlt = 'logo' | 'image' | 'pic'
const imgAlt:ImgAlt = 'logo' 


function Header() {
  const [time, setTime] = useState(new Date())


 const int = setInterval(() => {
  setTime(new Date())
 }, 1000);
  
  return (
    <header>
      <div className='logo__images'>
        <img src={logoVit} alt={imgAlt} />
        <img src={logo} alt="ReactLogo" />
      </div>
      <span>Time now: {time.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header