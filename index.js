

const image = document.getElementById('image');


function hover(){

    image.style.opacity = 0.5;

}

function leave(){

    image.style.opacity = 1;

}

image.addEventListener("mouseenter",hover);

image.addEventListener("mouseleave",leave)