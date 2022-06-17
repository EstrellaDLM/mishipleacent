
const API="https://api.thecatapi.com/v1/images/search?limit=3";
// //*Aqui hacemos un llamado a la API con la url, para insertarla en dentro del src de la etiqueta img que tenmos en el HTML
//!Aqui solo estamos usando las promesas
// fetch(API)
// .then(res=> res.json())
// .then(data=>{
    
//     const imgGatos=document.getElementById("gatos");
//     imgGatos.src=data[0].url;
// })

//todo:  Vamos a hacer de nuevo el llamado, pero ahora usando async y await
const llamado=async(URL)=>{
    const res= await fetch(URL);
    const data=await res.json();
  
    
const img1=document.getElementById("gatos1")
const img2=document.getElementById("gatos2")
const img3=document.getElementById("gatos3")
    
   
    img1.src=data[0].url;
    img2.src=data[1].url;
    img3.src=data[2].url;

}


const next=document.getElementById("next");
next.addEventListener("click", ()=>{
    llamado(API);
})
llamado(API);




//reto hacer un llamado de la imagen haciendo async y aweit

// const llamado=async (url)=>{
//     try{
//         const inf= await  fetch(url);
//         const data= await inf.json();

//         console.log(data)
//         const img=document.getElementById("gatos");
//         img.src=data[0].url;
        
        
//     }catch(error){
//         console.error(error)
//     }
// }
// llamado(API)
// const btnNext=document.getElementById("next")
// btnNext.addEventListener("click", ()=>llamado(API))
// 
// window.location.reload()
// 


