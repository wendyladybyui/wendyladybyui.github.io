const jsonFILE = 'https://wendyladybyui.github.io/lesson13/json/directory.json';

fetch(jsonFILE)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  
    let restaurants = jsonObject.businessdirectory[0].restaurants;
        console.log(restaurants);
    
    
    restaurants.forEach( x => {
        let i = 0; 
        console.log(i);
        let name = restaurants[i].name;
        document.getElementById(`restaurant-name`).textContent = name;
        /*let address = restaurants[i].address;
        let city = restaurants[i].city;
        let phone = restaurants[i].phone;
        let website = restaurants[i].website;
        let logo = restaurants[i].logo;
        let alt =  restaurants[i].name;
  
    document.getElementById(`restaurant-name`).textContent = name;
    document.getElementById(`restaurant-address`).textContent = address;
    document.getElementById(`restaurant-city`).textContent = city;
    document.getElementById(`restaurant-phone`).textContent = phone;
    document.getElementById(`restaurant-website`).textContent = website;
    img.src.getElementById(`restaurant-logo`) = logo;
    img.alt.getElementById(`restaurant-logo`) = alt;*/
    i++;

  });

  /*
    let boutiques = jsonObject.businessdirectory[1].boutiques;

  for (let i = 0; i < boutiques.length; i++ ) {

    let boucard = document.createElement('section');
    let bouh3 = document.createElement('h3');
    let bouaddress = document.createElement('p');
    let boucity = document.createElement('p');
    let bouphone = document.createElement('p');
    let bouweb = document.createElement('p');
    let bouimg = document.createElement('img');

    bouh3.textContent = boutiques[i].name;
    bouaddress.textContent = boutiques[i].address;
    boucity.textContent = boutiques[i].city;
    bouphone.textContent = boutiques[i].phone;
    bouweb.textContent = boutiques[i].website;
    //bouimg.src = boutiques[i].logo;
    //bouimg.alt = boutiques[i].name;

    boucard.appendChild(bouh3).appendChild(bouimg).appendChild(bouaddress).appendChild(boucity).appendChild(bouphone).appendChild(bouweb);

document.querySelector('div.business-card-boutique').appendChild(boucard);
}*/
  });