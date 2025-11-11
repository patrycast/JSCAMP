import { JobCard } from "./JobCard.jsx"
import jobsData from "../data.json"

export const JobListings = () => {
  return (
    <>
        <h2>Resultado de Busqueda</h2>
        <div className="jobs-listings">
        {jobsData.map(job=>(
           <JobCard key={job.id} job={job} />
        ))}
        </div>
    </>
  )
}
