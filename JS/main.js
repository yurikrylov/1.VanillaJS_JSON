window.addEventListener('DOMCContentLoaded',()=>{
    /*const request = new XMLHttpRequest();
    request.open('GET','../JSON/db.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();
    if (request.readyState === 4 && request.status === 200) {
            data = JSON.parse(request.response);
    }*/
    let data;
    fetch('../JSON/db.json', {mode: 'no-cors'})
        .then(response => response.json())
        .then(_data => data = _data)
        .catch(error => console.error(error));
    let menuSeasons = document.querySelector('.menuSeason');
    let menuEpisodes = document.querySelector('.menuEpisodes');
    let episodeText = document.querySelector('.episodeText');
    function getStrings(s,e){
        return data.seasons[s].episodes[e];
    }
    function getString(value){
        if (value){
            return true
        }
        if (!value){
            return false
        }
    }
    function buildHTML(s,e){
        let HTML = `` ;
        let data = getStrings(s,e);
        data.forEach((value)=>{
            HTML += getString(value)
        });
        return HTML;
    }

    function switchSeason(s){
        let value = data.seasons[s];
        let menuStr = ``;
        value.forEach((i)=>{
            menuStr += `<div class="episode_number">${i.number}</div>`;
        })
        menuEpisodes.innerHTML = menuStr;
    }

    menuSeasons.addEventListener('click',(event)=>{
        if (event.target && event.target.tagName ==='BUTTON'){
            switchSeason(event.target.value);
        }
    });

    menuEpisodes.addEventListener('click',(event)=>{
        if (event.target && event.target.tagName ==='BUTTON'){
            episodeText.innerHTML = buildHTML(document.querySelector('.season-active'),event.target.value);
        }
    });
})


