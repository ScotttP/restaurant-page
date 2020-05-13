const homePage = () => {
    const divContent = document.querySelector("#content");

    const scottsPub = 
    document.createElement('h1');
    scottsPub.setAttribute('id', 'restaurantNamePageLoad')
    scottsPub.textContent = `Scott's Pub`;

    divContent.appendChild(scottsPub)
}
export{ homePage }