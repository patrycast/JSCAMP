
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { HomePage } from "./pages/Home.jsx"
import { SearchPage } from "./pages/Search.jsx"
import { Route } from "./components/Route.jsx"




function App() {
 

  // let page= <NotFoundPage />
  
  // if(currentPath === "/"){
  //   page= <HomePage />
  // } else if(currentPath === "/search"){
  //   page= <SearchPage />
  // } 

  
  return (
    <>
      <Header/>
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      {/* <Route path="*" component={NotFoundPage} /> */}
      <Footer/>
    
    </>
  )
}

export default App
