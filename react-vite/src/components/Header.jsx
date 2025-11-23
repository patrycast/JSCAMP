import { Link } from "./Link"

export const Header = () => {
  return (
         <header>
          <Link href="/" style={{textDecoration: "none"}}>
            <h1 style={{color: "white"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#066fd1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 4l-5 8l5 8" /><path d="M16 4l5 8l-5 8" /></svg>
              DevJob
            </h1>
          </Link>

        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/search">Empleo</Link>
        </nav>
         
    </header>
  )
}
