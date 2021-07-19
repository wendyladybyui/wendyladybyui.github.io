const jsonFILE = 'https://wendyladybyui.github.io/lesson13/json/directory.json';

fetch(jsonFILE)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    let i=0;

    const boutiques = jsonObject.businessdirectory[1].boutiques;
    console.log(boutiques);

    boutiques.foreach( x => {
      let boucard = document.createElement('section');
      let bouh3 = document.createElement('h3');
      /*let bouaddress = document.createElement('p');
      let boucity = document.createElement('p');
      let bouphone = document.createElement('p');
      let bouweb = document.createElement('p');
      let bouimg = document.createElement('img');*/
  
      bouh3.textContent = boutiques[i].name;
      /*bouaddress.textContent = boutiques[i].address;
      boucity.textContent = boutiques[i].city;
      bouphone.textContent = boutiques[i].phone;
      bouweb.textContent = boutiques[i].website;
      //bouimg.src = boutiques[i].logo;
      //bouimg.alt = boutiques[i].name;*/
  
      boucard.appendChild(bouh3) /*.appendChild(bouimg).appendChild(bouaddress).appendChild(boucity).appendChild(bouphone).appendChild(bouweb);
  */    
  document.querySelector('div.business-card-boutique').appendChild(boucard);
  } 
    });