
let markerData =[];

const items = document.querySelectorAll("#mapped-posts-data li");
items.forEach(item => {
    const name = item.getElementsByClassName('wp-block-mapped-posts-archive__text-link')[0];
    const data = {
        position : [item.getAttribute("data-lat"), item.getAttribute("data-lng")],
        content : item.innerHTML,
        id : item.getAttribute("data-id"),
        name: name.textContent
    }
    markerData.push(data);

});



export default markerData;