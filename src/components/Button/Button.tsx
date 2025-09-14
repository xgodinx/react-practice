import './Button.scss';

function Button({ children, onClick, isActive, ...props }: any): any {
  return (
    <button {...props} className={isActive ? 'active' : ''} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
