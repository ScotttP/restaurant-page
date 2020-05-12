import { functionOne } from './initialLoad';
functionOne();

const divContent = document.querySelector("#content");
const aboutButton = document.querySelector('#about');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

aboutButton.addEventListener('click', () => {
    clear();
    aboutContent();
})

menuButton.addEventListener('click', () => {
    clear();
    menuContent();
})

contactButton.addEventListener('click', () => {
    clear();
    contactContent();
})


const aboutContent = () => {
    const aboutUsDiv = 
    document.createElement('div');
    aboutUsDiv.setAttribute('class', 'aboutUs');
    document.querySelector('.aboutUs')

    const heading = 
    document.createElement('h1');
    heading.textContent = 'About Us';

    const paragraph = 
    document.createElement('p');
    paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac. 
    Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Suspendisse ultrices gravida dictum fusce. 
    Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Id aliquet risus feugiat in ante. Diam vel quam elementum pulvinar etiam non quam. 
    Enim nunc faucibus a pellentesque sit amet porttitor eget. 
    Leo vel fringilla est ullamcorper eget nulla facilisi. Eget felis eget nunc lobortis.`;
    
    aboutUsDiv.appendChild(heading);
    aboutUsDiv.appendChild(paragraph);
    divContent.appendChild(aboutUsDiv);

    
}


const menuContent = () => {
    const menuDiv = 
    document.createElement('div');
    menuDiv.setAttribute('class', 'menu');
    document.querySelector('.menu');

    const entreeDiv = 
    document.createElement('div');
    entreeDiv.setAttribute('class', 'entreeItems');
    document.querySelector('.entreeItems');

        const entreeHeading = 
        document.createElement('h1');
        entreeHeading.setAttribute('id', 'entreeHeader');
        entreeHeading.textContent = 'Entrees'
        
        const entreeItemsUl = 
        document.createElement('ul');
        entreeItemsUl.setAttribute('class', 'entreeList');
        document.querySelector('.entreeList');

            const entreeItemsHamburger = 
            document.createElement('li');
            entreeItemsHamburger.setAttribute('id','hamburger');
            entreeItemsHamburger.textContent = 'Hamburger'

            const entreeItemsCheeseburger = 
            document.createElement('li');
            entreeItemsCheeseburger.setAttribute('id','cheeseburger');
            entreeItemsCheeseburger.textContent = 'Cheeseburger';

            const entreeItemsWings = 
            document.createElement('li');
            entreeItemsWings.setAttribute('id','wings');
            entreeItemsWings.textContent = 'Wings';

            const entreeItemsHotDog = 
            document.createElement('li');
            entreeItemsHotDog.setAttribute('id','hotdog');
            entreeItemsHotDog.textContent = 'Hotdog';

    const sideDiv = 
    document.createElement('div');
    sideDiv.setAttribute('class', 'sideItems');

    const sideHeading = 
    document.createElement('h1');
    sideHeading.setAttribute('id', 'sideHeader');
    sideHeading.textContent = 'Sides'
    
    const sideItemsUl = 
    document.createElement('ul');
    sideItemsUl.setAttribute('class', 'sideList');
    document.querySelector('.sideList');

        const sideItemsFries = 
        document.createElement('li');
        sideItemsFries.setAttribute('id','fries');
        sideItemsFries.textContent = 'Fries'

        const sideItemsChips = 
        document.createElement('li');
        sideItemsChips.setAttribute('id','chips');
        sideItemsChips.textContent = 'Chips';

        const sideItemsTots = 
        document.createElement('li');
        sideItemsTots.setAttribute('id','tots');
        sideItemsTots.textContent = 'Tots';

    const drinkDiv = 
    document.createElement('div');
    drinkDiv.setAttribute('class', 'drinkItems');

        const drinkHeading = 
        document.createElement('h1');
        drinkHeading.setAttribute('id', 'drinkHeader');
        drinkHeading.textContent = 'Drinks'
        
        const drinkItemsUl = 
        document.createElement('ul');
        drinkItemsUl.setAttribute('class', 'drinkList');
        document.querySelector('.drinkList');

            const drinkItemsBeer = 
            document.createElement('li');
            drinkItemsBeer.setAttribute('id','beer');
            drinkItemsBeer.textContent = 'Beer'

            const drinkItemsWine = 
            document.createElement('li');
            drinkItemsWine.setAttribute('id','wine');
            drinkItemsWine.textContent = 'Wine';

            const drinkItemsWhiskey = 
            document.createElement('li');
            drinkItemsWhiskey.setAttribute('id','whiskey');
            drinkItemsWhiskey.textContent = 'Whiskey';

    drinkItemsUl.appendChild(drinkItemsBeer);
    drinkItemsUl.appendChild(drinkItemsWine);
    drinkItemsUl.appendChild(drinkItemsWhiskey);

    sideItemsUl.appendChild(sideItemsFries);
    sideItemsUl.appendChild(sideItemsChips);
    sideItemsUl.appendChild(sideItemsTots);
    
    entreeItemsUl.appendChild(entreeItemsHamburger);
    entreeItemsUl.appendChild(entreeItemsCheeseburger);
    entreeItemsUl.appendChild(entreeItemsWings);
    entreeItemsUl.appendChild(entreeItemsHotDog);

    drinkDiv.appendChild(drinkHeading);
    drinkDiv.appendChild(drinkItemsUl);

    sideDiv.appendChild(sideHeading);
    sideDiv.appendChild(sideItemsUl);

    entreeDiv.appendChild(entreeHeading);
    entreeDiv.appendChild(entreeItemsUl);

    menuDiv.appendChild(entreeDiv)
    menuDiv.appendChild(sideDiv)
    menuDiv.appendChild(drinkDiv)

    divContent.appendChild(menuDiv)
}

const contactContent = () => {

    const formDiv = 
    document.createElement('div');
    formDiv.setAttribute('class', 'formDiv');
    document.querySelector('.formDiv');

        const formElement =
        document.createElement('form');
        formElement.setAttribute('class', 'contactForm');
        document.querySelector('.contactForm');

            const nameLabel = 
            document.createElement('label');
            nameLabel.setAttribute('id', 'nameLabel');
            nameLabel.textContent = 'Name :';
            
            const nameInput = 
            document.createElement('input');
            nameInput.setAttribute('id', 'nameInput');

            const emailLabel = 
            document.createElement('label');
            emailLabel.setAttribute('id', 'emailLabel');
            emailLabel.textContent = 'Email :';
            
            const emailInput = 
            document.createElement('input');
            emailInput.setAttribute('id', 'emailInput');

            const textLabel = 
            document.createElement('label');
            textLabel.setAttribute('id', 'textLabel');
            textLabel.textContent = 'What Would You Like to Say? :';
            
            const textInput = 
            document.createElement('input');
            textInput.setAttribute('id', 'textInput');

    formElement.appendChild(nameLabel)
    formElement.appendChild(nameInput)
    formElement.appendChild(emailLabel)
    formElement.appendChild(emailInput)
    formElement.appendChild(textLabel)
    formElement.appendChild(textInput)

    formDiv.appendChild(formElement)

    divContent.appendChild(formDiv)
}

const clear = () => {
   document.getElementById('content').innerHTML = '';
}