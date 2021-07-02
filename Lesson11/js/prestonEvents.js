const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject['towns'];
    let prestonIsHome = document.createElement('section');
    let prestonList = document.createElement('ul');
        for(var i = 0 ; i < towns[6].events.length ; i ++)
        {
            var newListItem = document.createElement('li');
            newListItem.innerHTML = towns[6].events[i];
            prestonIsHome.appendChild(prestonList).appendChild(newListItem);
        }

        document.querySelector('div.go2preston').appendChild(prestonIsHome);
});