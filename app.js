const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCuntries(data))
}

const displayCuntries = countries =>{
    // console.log(countries);
const CountriesHtml = countries.map(country=> getCOuntriesHtml(country));

// console.log(CountriesHtml)
const container = document.getElementById('countries');
container.innerHTML = CountriesHtml.join (' ');

}
 const getCOuntriesHtml = ({name,flags,area, region})=>{



    return `<div class = "country">
<h2> ${name.common}</h2>
<p> area :${area} </p>
<p> continent :${region} </p>
<img src="${ flags.png}"> 
    </div>
    `
 }
//  const getCOuntriesHtml = country=>{
//     return `<div class = "country">
// <h2> ${country.name.common}</h2>
// <img src="${country.flags.png}"> 
//     </div>
//     `
//  }

// distructuring
//  const getCOuntriesHtml = countriy=>{

//     const { name, flags} = countriy;

//     return `<div class = "country">
// <h2> ${name.common}</h2>
// <img src="${flags.png}"> 
//     </div>
//     `
//  }

loadCountries()