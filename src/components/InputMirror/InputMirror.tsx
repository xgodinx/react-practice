import { useState } from "react";


function InputMirror() {
  const [text, Settext] = useState('')

  return (
    <div>
      <input
       type="text" 
       value={text}
       onInput={(e) => Settext(e.target.value)}
       />
       <p>You wrote: {text}</p>
    </div>
     
  )
}

export default InputMirror