


let allSrc = ["./assets/cat.jpg",
    "./assets/dog.jpg" ,
    "./assets/imgFive.jpg",
    "./assets/imgFour.jpg",
    "./assets/imgOne.jpg",
    "./assets/imgThree.jpg",
    "./assets/imgTwo.jpg",
    "./assets/lion.jpg",
    "./assets/peacock.jpg"
]

let intialImg = document.getElementById('initialImg');
console.log(intialImg);
let imgIndex = 0;
setInterval(()=>{intialImg.src = allSrc[imgIndex];
    imgIndex++;
    if(imgIndex >= allSrc.length){imgIndex = 0}
},2000)