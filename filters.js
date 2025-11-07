  // filtros

   const filterTechnology= document.getElementById("filter-technology")
   const filterLocation= document.getElementById("filter-location");
   const filterExperienceLevel= document.getElementById("filter-experience-level")
  
   
   // filterTechnology.addEventListener("change", function(){
   //    console.log("tecnologia seleccionada: ", filterTechnology.value)
   // })


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