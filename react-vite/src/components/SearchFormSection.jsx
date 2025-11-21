import { useId } from "react";

export const SearchFormSection = ({onTextFilter, onSearch}) => {
    const idText= useId();
    const idTechnology= useId();
    const idLocation= useId();
    const idExperienceLevel= useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData= new FormData(e.target)

        const filters= {
            Technology: formData.get(idTechnology),
            Location: formData.get(idLocation),
            ExperienceLevel: formData.get(idExperienceLevel)
        }
        onSearch(filters)
    }


    const handleTextChange= (e) =>{
        const text= e.target.value
        onTextFilter(text)

    }

  return (
      <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico</p>


            <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
               
                    <input name={idText} id="empleos-search-input" type="text" placeholder="Buscar trabajos, empresas e habilidades"
                    onChange={handleTextChange} />
                
                    <button type="submit" style={{position: 'absolute', right: '4px'}}>Buscar</button>
            </div>

        <div className="search-filters">
            <select name={idTechnology} id="filter-technology">
                <option  value="">Tecnología</option>
                <option value="javascript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="react">React</option>
                <option value="nodejs">Node.js</option>
            </select>

            <select name={idLocation} id="filter-location">
                <option value="">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="barcelona">Barcelona</option>
            </select>

            <select name={idExperienceLevel} id="filter-experience-level">
                <option value="">Nivel de experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid-level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
            </select>
        </div>

        <p id="mensaje-filtro" style={{ marginTop: "1rem", color: "var(--primary-light)" }}></p>
        </form>
        </section>
  )
}
