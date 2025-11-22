import { JobCard } from "./JobCard.jsx"


export const JobListings = ({jobs}) => {
  return (
    <>
        <h2 style={{textAlign:"center"}}>Resultado de Busqueda</h2>
        <div className="jobs-listings">
        {jobs.map(job=>(
           <JobCard key={job.id} job={job} />
        ))}
        </div>
    </>
  )
}
