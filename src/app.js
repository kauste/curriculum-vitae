const scrollSection = (area) => {
    const section = document.querySelector('.'+ area +'-section');
    const sectionH3 = section.querySelector('.h3-wrapper');
    const svg1 = sectionH3.querySelector('svg:first-of-type');
    const svg2 = sectionH3.querySelector('svg:last-of-type');
    const sectionMain = section.querySelector('.'+ area +'-main');
    window.addEventListener('scroll', ()=> {
        if(section.getBoundingClientRect().top - sectionMain.offsetHeight  <= 0){
            svg1.style.cssText = 'animation: dash 2s linear forwards;';
            svg2.style.cssText ='animation: dash2 2s linear forwards 2s';
        }
    })
}
scrollSection('education');
scrollSection('work');

const footerDOM = document.querySelector('footer');
const pdfHref = document.querySelector('.pdf-wrapper');

addEventListener('scroll', ()=> {
    if(window.innerHeight + 60 >= footerDOM.getBoundingClientRect().bottom){
        pdfHref.style.boxShadow = 'none';
        if(window.innerWidth <= 960){
            pdfHref.style.bottom = '20px';
        }
    }
    else{
        pdfHref.style.cssText = 'box-shadow: 3px 3px 7px 0 rgba(51, 51, 51, 0.477);';
        if(window.innerWidth <= 960){
            pdfHref.style.bottom = '5px';
        }
    }


})
