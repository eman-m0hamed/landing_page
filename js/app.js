/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/

let num = 2;
function createSection(){

    

    for(let i=0; i< num; i++ ){

        let mainSections=document.querySelectorAll('section');

        let main = document.querySelector('main');

    let section = document.createElement('section'),

        div = document.createElement('div'),

        h2 = document.createElement('h2'),

        p1 = document.createElement('p'),

        p2 = document.createElement('p');

        main.appendChild(section);

        section.appendChild(div);

        div.appendChild(h2);

        div.appendChild(p1);

        div.appendChild(p2);

        section.setAttribute('data-nav', 'Section '+ (mainSections.length + 1));

        h2.textContent = section.getAttribute('data-nav');

        p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
        " Morbi fermentum metus faucibus lectus pharetra dapibus." +
        "Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue."+
        "Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis." +
        " Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum," +
        "nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod";
    
        p2.textContent ="Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, " +
        "vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. " + 
        "Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non." ;

        div.className ="landing__container";

        section.id = "section"+ (mainSections.length + 1);

        
        
        }

    
}

createSection();


let mainSections = document.querySelectorAll('section');

mainSections.forEach(section => {

    let navbarList = document.getElementById('navbar__list'),

    navItem = document.createElement('li'),

    navLink = document.createElement('a'),

    text = section.getAttribute('data-nav'),

    linksText = document.createTextNode(text);

    navLink.appendChild(linksText);

    navItem.appendChild(navLink);

    navbarList.appendChild(navItem);

    let sectionName = section.id;

    navLink.href = "#"+ sectionName;

    navLink.className = "menu__link ";

    
});

document.querySelector('a').classList.add('item_active_class'); 

document.querySelector('section').classList.add('Your_active_class'); 

function toggleActive(){


     mainSections = document.querySelectorAll('section');

    let navbarLinks = document.getElementsByClassName('menu__link');

    let secPosotion;


    for(let i=0; i<mainSections.length; i++){
        secPosotion = mainSections[i].getBoundingClientRect();

        if(secPosotion.top>=0 && secPosotion.top<=500){
            
        if(!mainSections[i].classList.contains('your-active-class')){

            mainSections[i].classList.add('your-active-class');

                navbarLinks[i].classList.add('item_active_class');
        }

        }

        else{
            mainSections[i].classList.remove('your-active-class');

            navbarLinks[i].classList.remove('item_active_class');
        }
    }

}

window.addEventListener('scroll', toggleActive);





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


