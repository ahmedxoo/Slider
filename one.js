let sliderImage = Array.from(document.querySelectorAll(".slider-container img "))

let slidesCount = sliderImage.length

console.log(slidesCount)

let currentSlide = 2
let slideNumberElement = document.getElementById("slide-number")
let nextButton = document.getElementById("next")
let prevButton = document.getElementById("prev")
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    
      } else {
    
        currentSlide++;
    
        checker();
    
      }
}
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    
      } else {
    
        currentSlide--;
    
        checker();
    
      }
}
// my ul
let indec= document.getElementById("indicators")
let myUl = document.createElement("ul")
myUl.setAttribute('id', 'pagination-ul');

for (i = 1; i <= slidesCount; i++){
    let listItem = document.createElement("li"); 
    listItem.setAttribute("index-items",i)
    listItem.innerHTML =` ${i}`; 
    myUl.appendChild(listItem)
}

indec.appendChild(myUl)

let sliderUl = Array.from(document.querySelectorAll("#pagination-ul li"))
let sliderUlCount = sliderUl.length
for (var i = 0; i < sliderUl.length; i++) {

    sliderUl[i].onclick = function () {
  
      currentSlide = parseInt(this.getAttribute('index-items'));
  
      checker();
  
    }
  
  }
  checker();
function checker() {
   
    slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`
    remover()
    sliderImage[currentSlide - 1].classList.add("active")
    sliderUl[currentSlide - 1].classList.add("active")
    if (currentSlide == 1) {
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled")
    }
    if (currentSlide == 5) {
        nextButton.classList.add("disabled")
    } else {
        nextButton.classList.remove("disabled")
}
 
}
function remover() {
   
    sliderImage.forEach(function (img) {
  
      img.classList.remove('active');
  
    });
  

    sliderUl.forEach(function (li) {
  
        li.classList.remove('active');
  
    });
  }


