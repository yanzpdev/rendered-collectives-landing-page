type ButtonProps = {
  className?: string;
  style?: object;
  onClick?: () => void;
  ref?: any;
  children: React.ReactNode
  disabled?: boolean;
  name?: string;
  type?: 'button' | 'reset' | 'submit';
}
const Button:React.FC<ButtonProps> = ({className, style, onClick, ref, children, disabled, name, type}) => {
  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
      name={name}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button;