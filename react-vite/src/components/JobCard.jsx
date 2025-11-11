


export const JobCard = ({ titulo, empresa, ubicacion, descripcion, data }) => {
   

  return (
    <article className="job-card">
      <header className="job-card-header">
        <h3 className="job-title">{titulo}</h3>
        <p className="job-company">{empresa}</p>
      </header>
      <div className="job-card-body">
        <p className="job-location">{ubicacion}</p>
        <p className="job-description">{descripcion}</p>
      </div>
      <footer className="job-card-footer">
        <span className="job-tags">{data}</span>
        <button className="btn-apply">Aplicar</button>
      </footer>
    </article>
  )
}
  
