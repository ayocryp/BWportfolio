const htmlSkillBar = document.querySelector('#skill-html');

function htmlBackgroundColor() {
    document.querySelector('#skill-html').style.background = 'red';
    document.querySelector('#skill-html').style.color = 'black';
}

htmlSkillBar.addEventListener('mouseover', htmlBackgroundColor);


function changeHtmlBackgroundColor() {
    document.querySelector('#skill-html').style.background = 'orange';
    document.querySelector('#skill-html').style.color = 'black';
}

htmlSkillBar.addEventListener('mouseout', changeHtmlBackgroundColor);




const jumpToSection = document.querySelector('#about-me-icon');

function jumpToAboutMe() {
    document.scrollIntoView('#about-me');
}

jumpToSection.addEventListener('click', jumpToAboutMe);