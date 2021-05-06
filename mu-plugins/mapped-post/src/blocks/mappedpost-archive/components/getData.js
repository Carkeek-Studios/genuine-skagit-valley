
let markerData =[];

const items = document.querySelectorAll("#mapped-posts-data > li");
items.forEach(item => {
    const name = item.getElementsByClassName('post-title')[0];
    const data = {
        position : [item.getAttribute("data-lat"), item.getAttribute("data-lng")],
        content : item.innerHTML,
        id : item.getAttribute("data-id"),
        name: name.textContent,
        count: item.getAttribute("data-count")
    }
    markerData.push(data);

});



export default markerData;