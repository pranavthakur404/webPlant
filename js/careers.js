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
 let btn1 = document.getElementById('btn1');
 let btn2 = document.getElementById('btn2');
 let btn3 = document.getElementById('btn3');
 let btn4 = document.getElementById('btn4');
 let btn5 = document.getElementById('btn5');
 let btn6 = document.getElementById('btn6');
 let btn7 = document.getElementById('btn7');
 let btn8 = document.getElementById('btn8');
 let slider = document.getElementById('slider');

 btn1.addEventListener('click',function(){
      slider.style.backgroundImage="url('../images/careers/The-Web-Plant.jpg')"

      btn1.style.color="white";
      btn2.style.color="grey";
      btn3.style.color="grey";
      btn4.style.color="grey";
      btn5.style.color="grey";
      btn6.style.color="gwhite";
      btn7.style.color="grey";
      btn8.style.color="grey";
      
 });
 btn2.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/Annual-Performance.jpg')"

    btn1.style.color="grey";
      btn2.style.color="white";
      btn3.style.color="grey";
      btn4.style.color="grey";
      btn5.style.color="grey";
      btn6.style.color="grey";
      btn7.style.color="grey";
      btn8.style.color="grey";
});
btn3.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/Annual-Party-1.jpg')"

    btn1.style.color="grey";
      btn2.style.color="grey";
      btn3.style.color="white";
      btn4.style.color="grey";
      btn5.style.color="grey";
      btn6.style.color="grey";
      btn7.style.color="grey";
      btn8.style.color="grey";
});
btn4.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/Sports-Day.jpg')"

    btn1.style.color="grey";
      btn2.style.color="grey";
      btn3.style.color="grey";
      btn4.style.color="white";
      btn5.style.color="grey";
      btn6.style.color="grey";
      btn7.style.color="grey";
      btn8.style.color="grey";
});
btn5.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/Party.jpg')"

    btn1.style.color="grey";
      btn2.style.color="grey";
      btn3.style.color="grey";
      btn4.style.color="grey";
      btn5.style.color="white";
      btn6.style.color="grey";
      btn7.style.color="grey";
      btn8.style.color="grey";
});
btn6.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/WOW-1.jpg')"

    btn1.style.color="grey";
      btn2.style.color="grey";
      btn3.style.color="grey";
      btn4.style.color="grey";
      btn5.style.color="grey";
      btn6.style.color="white";
      btn7.style.color="grey";
      btn8.style.color="grey";
});
btn7.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/Sports-Day.jpg')"

    btn1.style.color="grey";
      btn2.style.color="grey";
      btn3.style.color="grey";
      btn4.style.color="grey";
      btn5.style.color="grey";
      btn6.style.color="grey";
      btn7.style.color="white";
      btn8.style.color="grey";
});
btn8.addEventListener('click',function(){
    slider.style.backgroundImage="url('../images/careers/Skit.jpg')"

    btn1.style.color="grey";
      btn2.style.color="grey";
      btn3.style.color="grey";
      btn4.style.color="grey";
      btn5.style.color="grey";
      btn6.style.color="grey";
      btn7.style.color="grey";
      btn8.style.color="white";
});
// slider ends


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
