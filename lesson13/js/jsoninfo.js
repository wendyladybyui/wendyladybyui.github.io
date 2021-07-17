const jsonFILE = 'https://wendyladybyui.github.io/lesson13/json/directory.json';

fetch(jsonFILE)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  
    let restaurants = jsonObject.businessdirectory[0].restaurants;

  for (let i = 0; i < restaurants.length; i++ ) {

    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let address = document.createElement('div');
    /*let city = document.createElement('div');
    let phone = document.createElement('div');
    let web = document.createElement('div');
    let img = document.createElement('img');*/

    h3.textContent = restaurants[i].name;
    address.textContent = restaurants[i].address;
   /* city.textContent = restaurants[i].city;
    phone.textContent = restaurants[i].phone;
    web.textContent = restaurants[i].website;
    img.src = restaurants[i].logo;
    img.alt = restaurants[i].name;*/

    card.appendChild(h3).appendChild(img).appendChild(address). /*appendChild(city).appendChild(phone).appendChild(web) */;

document.querySelector('div.business-card-restaurant').appendChild(card);
  }
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

document.querySelector('div.business-card-boutiques').appendChild(boucard);
}
  });