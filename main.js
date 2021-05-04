const progressBar = document.querySelector(".progress");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
 
let currentActive = 1; 

nextBtn.addEventListener("click", function(){
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    update();
});

prevBtn.addEventListener("click", function(){
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add("active"); 
            // console.log(idx, currentActive);
        }else{
            circle.classList.remove("active");
        }

    });

    const actives = document.querySelectorAll(".active");
    console.log(actives.length);
    progressBar.style.width = (((actives.length-1) / (circles.length-1))*100) + "%";

    if(currentActive === 1){
        prevBtn.disabled = true;
    }else if(currentActive === circles.length){
        nextBtn.disabled = true;
    }else{
          prevBtn.disabled = false;
          nextBtn.disabled = false;
    }
}