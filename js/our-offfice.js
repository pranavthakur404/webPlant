function navbar(){
    let nav = document.getElementById('nav-links')
    if(nav.style.maxHeight=="0px"){
        nav.style.maxHeight="100vh";
        nav.style.padding="10px"
    }else{
        nav.style.maxHeight="0px";
        nav.style.padding="0px"
    }
}
window.addEventListener('scroll',function(){
    let up = document.getElementById('up-arrow');
    if(window.pageYOffset >100){
        up.style.transform="scale(1)";
        up.style.transition="0.5s"
    }else{
        up.style.transition="0.5s"
        up.style.transform="scale(0)";
    }
});

// slider
flag = 0;
function controler(x){
    flag = flag + x;
    slideShow(flag);
}
slideShow(flag);
function slideShow(x){
    let slide  = document.getElementsByClassName('slide');
    if(x==slide.length){
        flag = 0;
        x = 0;
    }
    if(x < 0){
        flag = slide.length - 1;
        x = slide.length - 1;
    }

    for(y of slide){
        y.style.display="none";
    }
    slide[x].style.display='block';
}
// slider ends


// search button
function search(){
    let search = document.getElementById('search-tab');
    let nav = document.querySelector('.nav-inner');
    if(search.style.display === 'none'){
        search.style.display='flex';
        nav.style.display="none";
    }else{
        search.style.display="none";
    }
}

function closeSearch(){
    let nav = document.querySelector('.nav-inner');
    let search = document.getElementById('search-tab');

    if(nav.style.display==='none'){
        nav.style.display='flex';
        search.style.display='none';
    }
    
}