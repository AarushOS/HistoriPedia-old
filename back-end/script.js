const searchWrapper = document.getElementById("searchInput");
const form = document.getElementById("form");
const inputBox = document.querySelector("input");
const suggBox = document.getElementById("autocom-box");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());

        });
        console.log(emptyArray);
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        createDropDown(emptyArray);

    } else {
        searchWrapper.classList.remove("active");
    }

}

function createDropDown(list) {
    const suggBox2 = document.getElementById("autocom-box");
    if (list.length > 8) {
        console.log("Do this... ");
        suggBox2.style.transform = "translate(-1.3%, -1%)";

    } else {
        console.log("Stop operation....");
        suggBox2.style.transform = "translate(-1.35% , -4% )";
    }
}

function check(list) {
    if (list == "<li>undefined</li>") {
        suggBox.innerHTML = "Search for any article";
    }
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');

    }
    suggBox.innerHTML = listData;
}
