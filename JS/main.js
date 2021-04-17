const jsonElement = document.getElementById('data');
const data = JSON.parse(jsonElement.textContent);

function getStrings(s,e){
    return data.season[s].episode[e];
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
    })
}

function switchSeason(s){
    let value = data.season[s].length;
    let menuStr = ``;
    value.forEach((i)=>{
       menuStr += `<div>${i.epiode.number}</div>`;
    })
}