import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { JobCard } from "./components/JobCard.jsx"
import { Pagination } from "./components/Pagination.jsx"

import data from "./data.json"
import { SearchFormSection } from "./components/SearchFormSection.jsx"
import { JobListings } from "./components/JobListings.jsx"
import { useState } from "react"

console.log(data)

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages= 5
  const handlePageChange=(page)=>{
    console.log("cambiando la pagina a ", page)
    setCurrentPage(page)

  }

  return (
    <>
  <Header/>
    
    <main>
      <SearchFormSection/>

      <section>
        <JobListings/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>


    <Footer/>
    
    </>
  )
}

export default App
