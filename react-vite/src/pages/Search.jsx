import { Pagination } from "../components/Pagination.jsx"
import { SearchFormSection } from "../components/SearchFormSection.jsx"
import { JobListings } from "../components/JobListings.jsx"
import { useEffect, useState } from "react"



const RESULT_PER_PAGE=5

const useFilters= () => {
   const [filters, setFilters] = useState({
            Technology: '',
            Location: '',
            ExperienceLevel: ''
        })
  const [textToFilter, setTextToFilter]= useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const [jobs, setJobs] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true)
        const response= await fetch("https://jscamp-api.vercel.app/api/jobs")
        const json= await response.json()

        setJobs(json.data)
        setTotal(json.total)

      }catch (error) {
        console.log("Error fetching jobs:", error)
      }finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

   const totalPages= Math.ceil(jobs.length / RESULT_PER_PAGE)

  
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
  return {
    loading,
    jobs,
    total,
    totalPages, 
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  }

}


export function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage, 
    handlePageChange, 
    handleSearch, 
    handleTextFilter
  } = useFilters()
 

  useEffect(() =>{
    document.title= `Resultados: ${total} - pagina ${currentPage} DevJob`
  },[total, currentPage])

  return (
    <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <section>
        {
          loading ? <p>Cargando Empleos...</p> : <JobListings jobs={jobs}/>
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}


