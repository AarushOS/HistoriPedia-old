const searchWrapper = document.getElementById("searchInput");
const form = document.getElementById("form");
const inputBox = document.querySelector("input");
const suggBox = document.getElementById("autocom-box");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
    }
    else{

    }
    showSuggestions(emptyArray);
    searchWrapper.classList.add("active");
}

function check(list){
    if (list == "<li>undefined</li>"){
        console.log("bitch");
    }
}

function showSuggestions(list){
    let listData;
    if (!list.length){
        //userValue = inputBox.value;
        //listData = '<li>' + userValue + '</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}