const jsonFILE = 'https://wendyladybyui.github.io/lesson13/json/directory.json';

fetch(jsonFILE)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  
  const restaurants = jsonObject.businessdirectory[0].restaurants;
  for (let i = 0; i < restaurants.length; i++ ) {

  let card = document.createElement('section');
  card.classList.add('restaurantinfo');
  let name = document.createElement('div');
  card.classList.add('restaurantname');
  name.textContent = restaurants[i].name ;
  let address = document.createElement('div');
  card.classList.add('restaurantaddress');
  address.textContent = restaurants[i].address;
  let city = document.createElement('div');
  card.classList.add('restaurantcity');
  city.textContent = restaurants[i].city;
  let phone = document.createElement('div');
  card.classList.add('restaurantphone');
  phone.textContent = restaurants[i].phone;
  let web = document.createElement('div');
  card.classList.add('restaurantphone');
  web.textContent = restaurants[i].web;
  let logo = document.createElement('img');
  logo.classList.add('restaurantlogo');
  logo.src = restaurants[i].logo;
  logo.alt = restaurants[i].name;

  card.appendChild(name).appendChild(address).appendChild(city).appendChild(phone).appendChild(web).appendChild(logo);
  document.querySelector('div.restaurant-card').appendChild(card); 
  }

});

fetch(jsonFILE)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  
  const boutiques = jsonObject.businessdirectory[1].boutiques;
  for (let i = 0; i < boutiques.length; i++ ) {

  let boucard = document.createElement('section');
  boucard.classList.add('boutiqueinfo');
  let bouname = document.createElement('div');
  bouname.classList.add('boutiquename');
  bouname.textContent = boutiques[i].name ;
  let bouaddress = document.createElement('div');
  bouaddress.textContent = boutiques[i].address;
  let boucity = document.createElement('div');
  boucity.textContent = boutiques[i].city;
  let bouphone = document.createElement('div');
  bouphone.textContent = boutiques[i].phone;
  let bouweb = document.createElement('div');
  bouweb.textContent = boutiques[i].web;
  let boulogo = document.createElement('img');
  boulogo.classList.add('boutiquelogo');
  boulogo.src = boutiques[i].logo;

  boucard.appendChild(bouname).appendChild(bouaddress).appendChild(boucity).appendChild(bouphone).appendChild(bouweb).appendChild(boulogo);
  document.querySelector('div.boutique-card').appendChild(boucard); 
  }

});