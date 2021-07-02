const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject['towns'];
    let sodaIsHome = document.createElement('section');
    let sodaList = document.createElement('ul');
        for(var i = 0 ; i < towns[0].events.length ; i ++)
        {
            var newListItem = document.createElement('li');
            newListItem.innerHTML = towns[0].events[i];
            sodaIsHome.appendChild(sodaList).appendChild(newListItem);
        }

        document.querySelector('div.go2soda').appendChild(sodaIsHome);
});