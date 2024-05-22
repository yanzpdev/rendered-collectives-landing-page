type HeaderTagProps = {
  id?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: object;
  ref?: any;
  children?: React.ReactNode;
}
  
const HeaderTag:React.FC<HeaderTagProps> = ({id, className, style, ref, children, level }) => {
  return (
    <>
      {level === 1 ?
        <h1
          id={id}
          className={className}
          style={style}
          ref={ref}
        >
          {children}
        </h1>
        :
        level === 2 ?
        <h2
          id={id}
          className={className}
          style={style}
          ref={ref}
        >
          {children}
        </h2>
        :
        level === 3 ?
        <h3
          id={id}
          className={className}
          style={style}
          ref={ref}
        >
          {children}
        </h3>
        :
        level === 4 ?
        <h4
          id={id}
          className={className}
          style={style}
          ref={ref}
        >
          {children}
        </h4>
        :
        level === 5 ?
        <h5
          id={id}
          className={className}
          style={style}
          ref={ref}
        >
          {children}
        </h5>
        :
        level === 6 ?
        <h6
          id={id}
          className={className}
          style={style}
          ref={ref}
        >
          {children}
        </h6>
        : null
      }
    </>
  )
}

export default HeaderTag