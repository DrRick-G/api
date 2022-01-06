let content = document.getElementById("content");
let title = document.getElementById("title");
fetch ('https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false')
    .then(reponse => reponse.json())
    .then (data => {
        
        let resultat = data.results;
        console.log(resultat)
        let img = document.createElement("img");
        for (let i = 0; i < resultat.length; i++) {
            content.innerHTML += `
            img.src="https://www.themoviedb.org/tv"+${resultat[i].poster_path}
            <h5>${resultat[i].title}</h5>
            <p>${resultat[i].overview}</p>
            <small>${resultat[i].release_date}</small>

            `

            
        }



    }
    )



