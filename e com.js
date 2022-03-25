console.log(
    "this is paragrap"
)
// toggle  bars
function baars() {
    let bar = document.getElementById("navbar");
    if (bar.style.display === "block") {
        bar.style.display = "none";
    } else {
        bar.style.display = "block";
    }
}
// crosse icon toggle
function crosse() {
    let cros = document.getElementById("navbar").style.display = "none";
}

// img scroll--
//function leftscroll(){
let photo = document.querySelector(".imgbox").children;
let i = photo.length;
let index = 0;

// function rightscroll(){
//     next("next");
// }

// function leftscroll(){
//     next("prev");
// }

// function next(direction){
//     if(direction=="next"){
//     index++;
//     if(index==i){
//         index=0;
//     }
// } 
// else{
//     if(index==0){
//         index=i-1;
//     }
//     else{index--;}
// }
// for(k=0;k<photo.length;k++){
// photo[k].classList.remove("active");
// }
// photo[index].classList.add("active");
// }   
// //
function leftscroll() {
    if (index == 0) {
        index = photo.length - 3;
    } else {
        index--;
    }
    changeslide();
}

function rightscroll() {
    if (index == photo.length - 3) {
        index = 0;
    } else {
        index++;
    }
    changeslide();
}

function changeslide() {
    for (k = 0; k < photo.length; k++) {
        photo[k].classList.remove("active");
    }
    photo[index].classList.add("active");

}

// watch slidelet
let mainimg = document.getElementById("main-watch");
let smallimg = document.getElementsByClassName("smallimg");
smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;
}


// // top brands scroll img

//  let imgBox = document.querySelectorAll("#brands-img img");
//  let imgnext = document.getElementById("next");
//  let idx = 0;


// function next(){
//     idx++;
//     if(idx > imgBox.length){
//         idx=0;
//     }
//     imgBox.style.transform = `translateX(${-idx * 200}px)`;
//     setTimeout(next , 2000);
// }

// next();