import './Button.scss'


function Button({children, onClick, isActive}: any):any {
  return (
    <button className={isActive ? 'active' : ''} onClick={onClick}>{children}</button>
  )
}


export default Button