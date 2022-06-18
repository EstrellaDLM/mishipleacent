const API_URL_Random = "https://api.thecatapi.com/v1/images/search?limit=3";
const API_URL_Favorite = 'https://api.thecatapi.com/v1/favourites?';
const API_key = 'api_key=6d575e5b-5a31-470f-a0de-91e9c5eb0976';
const next = document.getElementById("next");
const favs= document.getElementById("favs")
const spanError=document.getElementById("error")
console.log(`${API_URL_Favorite}${API_key}/`)
// //*Aqui hacemos un llamado a la API con la url, para insertarla en dentro del src de la etiqueta img que tenmos en el HTML
//!Aqui solo estamos usando las promesas
// fetch(API)
// .then(res=> res.json())
// .then(data=>{

//     const imgGatos=document.getElementById("gatos");
//     imgGatos.src=data[0].url;
// })

//todo:  Vamos a hacer de nuevo el llamado, pero ahora usando async y await
const michisRamdons = async () => {
    const res = await fetch(API_URL_Random);
    const data = await res.json();
    console.log("random",data)

    if(res.status !==200){
        spanError.innerHTML="Hubo un error pirobo: "+res.status;
    }else{

        const img1 = document.getElementById("gatos1");
        const img2 = document.getElementById("gatos2");
        const img3 = document.getElementById("gatos3");
    
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
    }
};
//* Ahora vamos a crear una funcion aaprte para llamar a los michis favortos, no se recomienda crearlo en la misma funcion, por eso haremos otra
const michisFavoritos = async () => {
   
    const res = await fetch(`${API_URL_Favorite}${API_key}`);
    const data = await res.json();
    console.log("favs",data)
 
    if(res.status !==200){
        spanError.innerHTML="Hubo un error pirobo: "+res.status+data.message;
    }

};
const saveMichisFavoritos= async () => {
    const res = await fetch(`${API_URL_Favorite}${API_key}/`,{
        method:"POST", 
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            image_id:"76k"
        })
        
    });
    const data=await res.json();
    console.log("savFav",data);
    if(res.status !==200){
        spanError.innerHTML="Hubo un error pirobo: "+res.status+data.message;
    }
console.log("savM",res)
}

michisRamdons();

michisFavoritos();



//!funciones de los botones
//!Boton para siguiente imagen
next.addEventListener("click", () => {
    michisRamdons();
});
//!boton para favoritos
// favs.addEventListener("click", () => {
//     michisFavoritos()
// });
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
