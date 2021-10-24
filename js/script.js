// team-speakes
function text1(){
    let para1 = document.getElementById('para1');
    let para2 = document.getElementById('para2');
    let para3 = document.getElementById('para3');
    let para4 = document.getElementById('para4'); 

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');

    btn1.style.color='grey';
    btn2.style.color='silver';
    btn3.style.color='silver';
    btn4.style.color='silver';

    para1.style.display="block";
    para2.style.display="none";
    para3.style.display="none";
    para4.style.display="none";
}

function text2(){
   let para1 = document.getElementById('para1');
    let para2 = document.getElementById('para2');
    let para3 = document.getElementById('para3');
    let para4 = document.getElementById('para4');

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');

    btn1.style.color='silver';
    btn2.style.color='grey';
    btn3.style.color='silver';
    btn4.style.color='silver';

    
    para1.style.display="none";
    para2.style.display="block";
    para3.style.display="none";
    para4.style.display="none";
}
function text3(){
  
    let para1 = document.getElementById('para1');
    let para2 = document.getElementById('para2');
    let para3 = document.getElementById('para3');
    let para4 = document.getElementById('para4'); 

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');

    btn1.style.color='silver';
    btn2.style.color='silver';
    btn3.style.color='grey';
    btn4.style.color='silver';
    
    para1.style.display="none";
    para2.style.display="none";
    para3.style.display="block";
    para4.style.display="none";
}
function text4(){
    let para1 = document.getElementById('para1');
    let para2 = document.getElementById('para2');
    let para3 = document.getElementById('para3');
    let para4 = document.getElementById('para4'); 

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');

    btn1.style.color='silver';
    btn2.style.color='silver';
    btn3.style.color='silver';
    btn4.style.color='grey';
    
    para1.style.display="none";
    para2.style.display="none";
    para3.style.display="none";
    para4.style.display="block";
}

// team-speakes ends

// up arrow
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

// navicon
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