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

// counter start
let count1 = document.getElementById('count1');
let count2 = document.getElementById('count2');
let count3 = document.getElementById('count3');
let count4 = document.getElementById('count4');

let counter1=0;
let counter2=0;
let counter3=0;
let counter4=0;

setInterval(function(){
     if(counter1<=4302){
        counter1=counter1+50;
        count1.innerHTML=counter1;
     }
     if(counter2<=10000){
         counter2=counter2+50;
         count2.innerHTML=counter2;
         
     }
     if(counter3<=12000){
         counter3=counter3+50;
         count3.innerHTML=counter3;
     }
    if(counter4<100000){
       counter4=counter4+500;
       count4.innerHTML=counter4;
    }
},)


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

