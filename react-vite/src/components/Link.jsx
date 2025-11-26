import { useRouter } from "../hooks/UseRouter"

export const Link = ({href, children, ...restOfProps}) => {
  const {navigateTo} = useRouter()
    const handleClick = (e) =>{
        e.preventDefault()

        navigateTo(href)
    }
  return (
    <a href={href} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  )
}
