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

        const params=new URLSearchParams()
        if (textToFilter) params.append("text", textToFilter)
        if(filters.Technology) params.append("technology", filters.Technology)
        if(filters.Location) params.append("type", filters.Location)
        if(filters.ExperienceLevel) params.append("level", filters.ExperienceLevel)

          const offset= (currentPage -1) * RESULT_PER_PAGE
          params.append("limit", RESULT_PER_PAGE)
          params.append("offset", offset)

        const queryParams= params.toString()



        const response= await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
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
  }, [filters, textToFilter, currentPage])

   const totalPages= Math.ceil(total / RESULT_PER_PAGE)

  
  const handlePageChange=(page)=>{
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
 
const title = loading ? "cargando.. - DevJob" : `Resultados: ${total}, pagina ${currentPage} - DevJob` 



  return (
    <main>
    <title>{title}</title>
    <meta name="description" content="Explora miles de oportunidades laborales en el sector tecnológico.
    Encuentra tu próximo empleo en DevJobs"/>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <section>
         <h2 style={{textAlign:"center"}}>Resultado de Busqueda</h2>
        {
          loading ? <p>Cargando Empleos...</p> : <JobListings jobs={jobs}/>
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}


