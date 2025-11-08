

   const filterTechnology= document.getElementById("filter-technology")
   const filterLocation= document.getElementById("filter-location");
   const filterExperienceLevel= document.getElementById("filter-experience-level")
  
   
   filterTechnology.addEventListener("change", function(){
      const technology= document.querySelectorAll(".job-listing-card"); 
      const technologySelectedValue=filterTechnology.value;console.log

      technology.forEach(tech=>{
         const tecnologia= tech.getAttribute("data-technology"); (tecnologia)
         const isShown= technologySelectedValue === "" || technologySelectedValue === tecnologia;
         tech.classList.toggle("is-hidden", !isShown);
      });
   });


  // filtros ubicacion

    filterLocation.addEventListener("change", function(){
       const jobs= document.querySelectorAll(".job-listing-card");
       const selectedValue= filterLocation.value;

      jobs.forEach(job =>{
         // const modalidad= job.dataset.modalidad;
         // otra forma
         const modalidad=job.getAttribute("data-modalidad");

         // forma mas optima
         const isShown= selectedValue === "" || selectedValue === modalidad;
         job.classList.toggle("is-hidden", !isShown);
      })

      //   if(selectedValue === "" || selectedValue === modalidad){
      //    job.classList.remove("is-hidden");
      // }else{
      //    job.classList.add("is-hidden");
      // }
   })
   // })

     // filtros nivel
       filterExperienceLevel.addEventListener("change", function(){
          const jobs= document.querySelectorAll(".job-listing-card");
          const selectedValue= filterExperienceLevel.value;

          jobs.forEach(job =>{
             const nivel= job.getAttribute("data-nivel");
             const isShown= selectedValue === "" || selectedValue === nivel;
             job.classList.toggle("is-hidden", !isShown);
          })
       })