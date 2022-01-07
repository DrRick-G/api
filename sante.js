fetch(`https://covid-19-data.p.rapidapi.com/country/code`)
    .then(res => res.json())
    .then(data => console.log(data))