let btn = document.getElementById("inputValue");
let mot = document.getElementById("query");
let apiKey = '7843f8d22a43911f15301ef8d76338ae'

//     fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
//     .then(reponse => reponse.json())
//     .then (data => {
//         displayMovie(data.results)
//         console.log(data.results)
        
//     })


//     btn.addEventListener('click', (e)=>{
//         e.preventDefault();
//         console.log(mot.value);
//         if (mot.value) {
//             fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${mot.value}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             displayMovie(data.results)
//         })
//         } else {
//             alert("pas de correspondance") 
//         }
        
//     });

//     function displayMovie(data) {
//         let ecran = document.getElementById("ecran");
//         ecran.innerHTML ="";
//         if (data.length != 0) {
//             for (let i = 0; i < data.length; i++) {

//                 ecran.innerHTML += `<div class="card-group col-4">
//                     <div class="card">
//                         <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="Card image cap">
//                         <div class="card-body">
//                         <h5 class="card-title">${data[i].title}</h5>
//                         <p class="card-text">${data[i].overview}</p>
//                         </div>
//                         <div class="card-footer">
//                         <small class="text-muted">${data[i].release_date}</small>
//                     </div>
//                 </div>`
                
//             }
//         }
//     }

axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
    .then(response => {
        let resultats = response.data.results;
            AfficherData(resultats);

            btn.addEventListener('click', (e)=>{
                    e.preventDefault();
                       
                     if (mot.value) {
                           axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${mot.value}`)
                       .then(response => {
                        let resultats = response.data.results;
                          AfficherData(resultats)
                       })
                        } else {
                          alert("pas de correspondance") 
                      }
                        
                    });


        function AfficherData(resultats){
            let ecran = document.getElementById("ecran");
            ecran.innerHTML="";
            if (resultats.lenght !=0){
                for(let a=0; a<resultats.length; a++){
                    ecran.innerHTML += `<div class="card-group col-4">
                    <div class="card">
                      <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${resultats[a].poster_path}" alt="Card image cap">
                       <div class="card-body">
                       <h5 class="card-title">${resultats[a].title}</h5>
                       <p class="card-text">${resultats[a].overview}</p>
                        </div>
                       <div class="card-footer">
                       <small class="text-muted">${resultats[a].release_date}</small>
                    </div>
               </div>`
                }
            }
        }
    })
    .catch(error => console.log('erreur survenue : ', error))



