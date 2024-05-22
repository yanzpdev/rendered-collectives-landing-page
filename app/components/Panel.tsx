type PanelProps = {
  id?: string;
  tag: 'div' | 'span' | 'section' | 'main' | 'footer' | 'header' |
       'nav' | 'aside' | 'article' | 'figure' | 'ul' | 'table' |
       'ol' | 'li' | 'address' | 'hgroup' | 'dd' | 
       'dt' | 'dl' | 'figcaption' | 'hr' | 'menu' | 'pre' | 
       'code' | 'data' | 'label';
  className?: string;
  style?: object;
  ref?: any;
  children?: React.ReactNode;
  htmlFor?: string;
}

const Panel:React.FC<PanelProps> = ({id, tag, className, style, ref, children, htmlFor }) => {
  return (
    <>
      {tag === 'div' ?
          <div
            className={className}
            style={style}
            id={id}
            ref={ref}
          >
            {children}
          </div>
        : 
        tag === 'span' ?
          <span
            className={className}
            style={style}
            id={id}
            ref={ref}
          >
            {children}
          </span>
        : 
        tag === 'main' ?
          <main
            className={className}
            style={style}
            id={id}
            ref={ref}
          >
            {children}
          </main>
        : 
        tag === 'section' ?
          <section
            className={className}
            style={style}
            id={id}
            ref={ref}
          >
            {children}
          </section>
        : 
        tag === 'footer' ?
        <footer
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </footer>
        : 
        tag === 'header' ?
          <header
            className={className}
            style={style}
            id={id}
            ref={ref}
          >
            {children}
          </header>
        : 
        tag === 'nav' ?
        <nav
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </nav>
        : tag === 'aside' ?
        <aside
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </aside>
        : tag === 'article' ?
        <article
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </article>
        : tag === 'figure' ?
        <figure
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </figure>
        : tag === 'ul' ?
        <ul
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </ul>
        : tag === 'table' ?
        <table
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </table>
        : tag === 'ol' ?
        <ol
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </ol>
        : tag === 'li' ?
        <li
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </li>
        : tag === 'address' ?
        <address
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </address>
        : tag === 'hgroup' ?
        <hgroup
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </hgroup>
        : tag === 'dd' ?
        <dd
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </dd>
        : tag === 'dt' ?
        <dt
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </dt>
        : tag === 'dl' ?
        <dl
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </dl>
        : tag === 'figcaption' ?
        <figcaption
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </figcaption>
        : tag === 'hr' ?
        <hr
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </hr>
        : tag === 'menu' ?
        <menu
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </menu>
        : tag === 'pre' ?
        <pre
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </pre>
        : tag === 'code' ?
          <code
            className={className}
            style={style}
            id={id}
            ref={ref}
          >
            {children}
          </code>
        : tag === 'data' ?
        <data
          className={className}
          style={style}
          id={id}
          ref={ref}
        >
          {children}
        </data>
        : tag === 'label' ?
        <label
          className={className}
          style={style}
          id={id}
          ref={ref}
          htmlFor={htmlFor}
        >
          {children}
        </label>
        : 
        null
      }
    </>
  )
}

export default Panel