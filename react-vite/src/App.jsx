import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { JobCard } from "./components/JobCard.jsx"
import { Pagination } from "./components/Pagination.jsx"

import data from "./data.json"
import { SearchFormSection } from "./components/SearchFormSection.jsx"
import { JobListings } from "./components/JobListings.jsx"

console.log(data)

function App() {

  return (
    <>
  <Header/>
  <JobCard/>
    
    <main>
      <SearchFormSection/>

      <section>
        <JobListings/>
        <Pagination/>
      </section>
    </main>


    <Footer/>
    
    </>
  )
}

export default App
