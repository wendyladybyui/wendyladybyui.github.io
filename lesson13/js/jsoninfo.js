const jsonFILE = 'json/directory.json';

fetch(jsonFILE)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  
    let restaurants = jsonObject.businessdirectory[0].restraunts;

  for (let i = 0; i < restaurant.length; i++ ) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let city = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = restaurants[i].name;
    img.src = restaurants[i].logo;
    img.alt = restaurants[i].name;
    address.textContent = restaurants[i].address;
    city.textContent = restaurants[i].city;
    phone.textContent = restaurants[i].phone;
    web.textContent = restaurants[i].website;

    card.appendChild(h2).appendChild(img).appendChild(address).appendChild(city).appendChild(phone).appendChild(web);

document.querySelector('div.business-card-restaurant').appendChild(card);


}
  });