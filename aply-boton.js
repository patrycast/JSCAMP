  // const botones= document.querySelectorAll(".button-apply-job")

   // botones.forEach(boton =>{
   //    boton.addEventListener("click",()=> {
   //   boton.textContent="!Aplicado!";
   //   boton.classList.add("is-applied")
   //   boton.disabled=true;
   // })
   // })
 


   // forma mas optima para realizarlo:
   // en lugar de añadir un evento a cada boton, añadimos un solo evento al contenedor padre y detectar que cuando se
   // hace click, que elemento recibio el click. Elemento padre: jobs-listings, que es el contenedor

   const jobsListingsSection= document.querySelector(".jobs-listings");
   jobsListingsSection.addEventListener("click",function(event){
      const element= event.target

      if(element.classList.contains("button-apply-job")){
         element.textContent="!Aplicado!";
         element.classList.add("is-applied")
         element.disabled=true;
      }

   })