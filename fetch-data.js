
// const container= document.querySelector(".jobs-listings");


// fetch("./data.json")
// .then(Response =>{
//    return Response.json()
// })
// .then((jobs) =>{
//    console.log(jobs)
//    jobs.forEach(job => {
//       const article= document.createElement("article")
//       article.className="job-listing-card";
//       article.dataset.modalidad= job.data.modalidad
//       article.dataset.nivel= job.data.nivel
//       article.dataset.technology= job.data.technology

//       article.innerHTML=`<div>
//       <h3>${job.titulo}</h3>
//       <small>${job.empresa} | ${job.ubicacion}</small>
//       <p>${job.descripcion}</p>
//       <p><strong>Modalidad:</strong> ${job.data.modalidad} | <strong>Nivel:</strong> ${job.data.nivel} | <strong>Tecnología:</strong> ${job.data.technology}</p>
//       </div>
//       <button class="button-apply-job">Aplicar</button>
//       `
//       container.appendChild(article);
//    })
// })