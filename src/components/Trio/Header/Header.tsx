import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import logo from '/src/assets/react.svg';
import logoVit from '/public/vite.svg';
import './Header.scss';

const HeaderContainer = styled.header`
  display: flex;
  background-color: rgb(136, 131, 126);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 7px;
  h3 {
    margin: 0;
  }
`;

type ImgAlt = 'logo' | 'image' | 'pic';
const imgAlt: ImgAlt = 'logo';

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <HeaderContainer>
      <div className="logo__images">
        <img src={logoVit} alt={imgAlt} />
        <img src={logo} alt="ReactLogo" />
      </div>
      <span>Time now: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}

export default Header;
