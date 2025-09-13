import { useEffect, useState } from "react";

function Footer(){
  const [tel, setTel] = useState(0)
  
  useEffect(() => {
    const int = setInterval(() => {
      setTel(Math.floor(Math.random() * 10000000));
    }, 1500);

    return () => clearInterval(int); // ✅ чистим интервал
  }, []);

  return (
    <footer>
      <div className="company">Kobze</div>
      <a className='telephone' href= {`tel: ${tel}`}>380{tel}</a>
    </footer>
  )
}

export default Footer