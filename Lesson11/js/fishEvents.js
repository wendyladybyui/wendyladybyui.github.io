const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject['towns'];
    let fishIsHome = document.createElement('section');
    let newList = document.createElement('ul');
        for(var i = 0 ; i < towns[2].events.length ; i ++)
        {
            var newListItem = document.createElement('li');
            newListItem.innerHTML = towns[2].events[i];
            fishIsHome.appendChild(newList).appendChild(newListItem);
        }

        document.querySelector('div.go2fish').appendChild(fishIsHome);
});