const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//*******hambergurIcon******/
const humberger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const hero = document.getElementById('hero');

humberger.addEventListener('click', ()=>{
    navUl.classList.toggle('show');
        // hero.classList.toggle('hero-margin-top');

});

//*******fixed navbar*****/

const navbar = document.getElementById("nav");
window.addEventListener("scroll",()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }
})


//*****slider*****/
const slide = document.getElementsByClassName("slide");
const dot = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
 var n;
function reset(){
    for(n=0; n<slide.length; n++){
        slide[n].style.display = 'none';
    }
}
/******nextSlide */
var i = 0;
next.addEventListener('click',function(){
     i++;
    if(i > slide.length-1){
        i = 0;
    }
    reset();
    slide[i].style.display = 'block';
}
)
/*******prevSlide */
prev.addEventListener('click',function(){
    i--;
   if(i < 0){
       i = slide.length-1;
   }
   reset();
   slide[i].style.display = 'block';
}
)
/********automatic slider */
setInterval(function(){
    i++;
    if(i > slide.length-1){
        i = 0;
    }
    reset();
    slide[i].style.display = 'block';
},2000)

async function sendApiRequest(){
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

sendApiRequest()
function useApiData(data){
    document.getElementById('foodish').innerHTML = `
    <div class="card">
    <img src="${data.meals[0].strMealThumb}" alt="" class="card-img">
            <div class="card-body">
                <h4 class="card-title">عنوان</h4>
                <p class="card-text">توضیحات</p>
                <button class="card-btn" id="card-btn"></button>
            </div>
            </div>          
    `
}

