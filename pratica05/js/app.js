const lista = document.querySelector("ol");

const itenslista1 =lista.querySelectorAll("li");

for(let i = 0; i < itenslista1.length; i++) {
     if((i +1) % 2 == 0){
         itenslista1[i].style.fontWeight = 900;
     }
}
   
