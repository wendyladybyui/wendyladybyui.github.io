const jsonFILE = 'json/jsoninfo.js';

fetch(jsonFILE)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  

  const businesses = jsonObject['businessdirectory'];

  for (let i = 0; i < businessdirectory.length; i++ ) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let city = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = businessdirectory[i].name;
    img.src = businessdirectory[i].logo;
    img.alt = businessdirectory[i].name;
    address.textContent = businessdirectory[i].address;
    city.textContent = businessdirectory[i].city;
    phone.textContent = businessdirectory[i].phone;
    web.textContent = businessdirectory[i].website;

    card.appendChild(h2).appendChild(img).appendChild(address).appendChild(city).appendChild(phone).appendChild(web);

document.querySelector('div.business-card').appendChild(card);


}
  });