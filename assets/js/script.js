var infoList = document.querySelector('#info');
var fetchButton = document.querySelector('#fetch-button');
var format = "websites";

function getApi() {
    console.log("click")
    var searchItem = document.querySelector("#search").value;
    console.log(searchItem)

    // TODO: figure out full url
    var requestUrl = `https://www.loc.gov/${format}/?q=${searchItem}?fo=json&c=10`
    // var requestUrl = "https://www.loc.gov/collections/civil-war-maps?fo=json"

    fetch(requestUrl)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data.json())
            //looping over the fetch response and inserting the results into a list
            // for (let i = 0; i < data.featured_items.length; i++) {
            //     const element = data.featured_items[i];
            //     // console.log(element)
            //     // create a list element
            //     var listItem = document.createElement("li");

            //     //Set the text of the list element to the JSON response (TODO: need to check for actual responses still)
            //     // listItem.textContent = JSON.stringify(data.featured_items[i])
            //     listItem.textContent = data.featured_items[i].title

            //     //Append the li element to the id associated with the ul element.
            //     infoList.appendChild(listItem);
            // }
        })
}

fetchButton.addEventListener("click", getApi);