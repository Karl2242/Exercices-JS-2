let monImg = document.getElementById("imagechange")



monImg.addEventListener("mouseover", handleClickChangeImg);
monImg.addEventListener("mouseout", handleOutChangeImg);
function handleClickChangeImg(){
 monImg.src = "./images/image1_2.jpg"   
}

function handleOutChangeImg(){
    monImg.src = "./images/image1.jpg" 
}