let $ = (e) => document.querySelector(e),
    toggle = $('.btn-toggle'),
    menu = $('.menu');



toggle.addEventListener("click", (e)=>{
    e.preventDefault();

    if(!e.target.classList[1]){
       toggle.classList.toggle('true');
       menu.classList.toggle('_');
    }else{
        menu.classList.remove('_');
        toggle.classList.remove('true');
    }
    
})

