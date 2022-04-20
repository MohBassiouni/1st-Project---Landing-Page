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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
//var for each element needed
const navlist = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');



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

const navbuild = () => {
    let navstorage = '';
    // looping for all sections
    sections.forEach(section => {

        // Var indicating the name and link we will use

        // Scroll to section on link click
        const sectionId = section.id;
        const sectioName = section.dataset.nav;

        navstorage += `<li><a class='Menu__link' href ='#${sectionId}'>${sectioName}</a></li>
        `;

    });
    // appending all what created in the var navlist 
    navlist.innerHTML = navstorage;
}

navbuild();






// Add class 'active' to section when near top of viewport

const Position = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// Normally remove active class
const removeactive = (section) => {
    section.classList.remove('your-active-class');

};
// when the active class should be added
const addactive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
    };
};

// The function used to indicate the active section

const activesection = () => {
    sections.forEach(section => {
        const elementPosition = Position(section);
        inviewport = () => elementPosition < 120 && elementPosition >= -120;
        removeactive(section);
        addactive(inviewport(), section);
    });
};

// Scroll to anchor ID using scrollTO event


window.addEventListener('scroll', activesection);







/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 




// Set sections as active