
let ecran = document.getElementById("ecran");
fetch ('https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false')
    .then(reponse => reponse.json())
    .then (data => {
        let resultat = data.results;
        let img = document.createElement("img");
        for (let i = 0; i < resultat.length; i++) {
            ecran.innerHTML += `
            <h5>${resultat[i].title}</h5>
            <div>${resultat[i].overview}</div>

            `

            
        }



    }
    )



