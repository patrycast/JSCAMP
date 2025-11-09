 

   // input

   const searchForm= document.getElementById("empleos-search-form");
   searchForm.addEventListener("submit", function(event){
      event.preventDefault();
      console.log("Formulario de búsqueda enviado");
   })

   const searchInput= document.getElementById("empleos-search-input");

   searchInput.addEventListener("input", function(){
      console.log(searchInput.value)
   })



// jobs.forEach(job =>{
//    const modalidad= job.getAttribute("data-modalidad");
//    const isShown= selectedValue === "" || selectedValue === modalidad;
//    job.classList.toggle("is-hidden", !isShown);
// })



   // filterExperienceLevel.addEventListener("change", function(){
   //    console.log(filterExperienceLevel.value)
   // })

import "./aply-boton.js"
import "./filters.js"
import "./fetch-data.js"
import "./devjobs-avatar-element.js"