import { Pagination } from "../components/Pagination.jsx"
import { SearchFormSection } from "../components/SearchFormSection.jsx"
import { JobListings } from "../components/JobListings.jsx"
import { useEffect, useState } from "react"

import jobsData from "../data.json"

const RESULT_PER_PAGE=5


export function SearchPage() {
  const [filters, setFilters] = useState({
            Technology: '',
            Location: '',
            ExperienceLevel: ''
        })
  const [textToFilter, setTextToFilter]= useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const jobFilteredByFilters= jobsData.filter(job => {
    return ((filters.Technology === '' || job.data.technology === filters.Technology)
  )
 
})
  const jobsWithTextFilter= textToFilter === '' ? jobFilteredByFilters : jobFilteredByFilters.filter(job =>{
    return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
  })

   const totalPages= Math.ceil(jobsWithTextFilter.length / RESULT_PER_PAGE)
  
  const pagedResults= jobsWithTextFilter.slice(
    (currentPage -1) * RESULT_PER_PAGE, currentPage* RESULT_PER_PAGE)
  
  const handlePageChange=(page)=>{
    console.log("cambiando la pagina a ", page)
    setCurrentPage(page)
  }

  const handleSearch=(filters) =>{
    setFilters(filters)
    setCurrentPage(1)
  }

 

  const handleTextFilter= (newTextToFilter) =>{
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }

  useEffect(() =>{
    document.title= `Resultados: ${jobsWithTextFilter.length} - pagina ${currentPage} DevJob`
  },[jobsWithTextFilter, currentPage])

  return (
    <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <section>
        <JobListings jobs={pagedResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}


