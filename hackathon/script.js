'use strict'

//CHNAGE THUMBNAIL
let selectedValue
function getSelectValue(){
     selectedValue = document.getElementById("Mobility").value;
    change1();
}
let thumbnail = document.querySelector('.thumbnail')


let change1 = function(){
    if(selectedValue === '1'){
        thumbnail.style.backgroundColor = '#9cf9ee';
    }else if(selectedValue === '2'){
        thumbnail.style.backgroundColor = '#ffe299';
    }else if(selectedValue === '3'){
        thumbnail.style.backgroundColor = '#d194ff';
    }else if(selectedValue === '4'){
        thumbnail.style.backgroundColor = '#cfcfcf';
    }
}

//CHANGE BACKGROUND
let selectedValue1
function getSelectValue1(){
     selectedValue1 = document.getElementById("Mobility1").value;
    change2();
}
let final= document.querySelector('.final')


let change2 = function(){
    if(selectedValue1 === '1'){
        final.style.backgroundColor = 'white';
    }else if(selectedValue1 === '2'){
        final.style.backgroundColor = '#f5a9f4';
    }else if(selectedValue1 === '3'){
        final.style.backgroundColor = '#a9f5c5';
    }else if(selectedValue1 === '4'){
        final.style.backgroundColor = '#dbdbdb';
    }
}

//CHANGE FONT

function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.querySelector(".about-name").style.fontFamily = listValue;
    document.querySelector(".about-name2").style.fontFamily = listValue;
    document.querySelector(".about-me4").style.fontFamily = listValue;
    document.querySelector(".university-output").style.fontFamily = listValue;
    document.querySelector(".university-course-output").style.fontFamily = listValue;
    document.querySelector(".university-year-output").style.fontFamily = listValue;
    document.querySelector(".college-output").style.fontFamily = listValue;
    document.querySelector(".college-course-output").style.fontFamily = listValue;
    document.querySelector(".college-year-output").style.fontFamily = listValue;
}
//PROTFOLIO

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    document.querySelector("#display-image1").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


//ACCEPTING DATA

let submit = document.querySelector('.submit')

submit.addEventListener('click',function(){
    let user_name = document.querySelector('.fn').value
    document.querySelector('.about-name').textContent = user_name;

    let catcy_title = document.querySelector('.ct').value
    document.querySelector('.about-name2').textContent = catcy_title;

    let bio = document.querySelector('.b').value
    document.querySelector('.about-me4').textContent = bio;

    let location = document.querySelector('.lnn').value
    document.querySelector('.ln-1').textContent = location;
    
    let email = document.querySelector('.em').value
    document.querySelector('.emai').textContent = email;

    let linkedin = document.querySelector('.na').value
    document.querySelector('.university-output').textContent = linkedin

    let course1 = document.querySelector('.co').value
    document.querySelector('.university-course-output').textContent = course1

    let year1 = document.querySelector('.ye').value
    document.querySelector('.university-year-output').textContent = `graduation: ${year1}`

    let linkedin1 = document.querySelector('.na1').value
    document.querySelector('.college-output').textContent = linkedin1

    let course3 = document.querySelector('.co1').value
    document.querySelector('.college-course-output').textContent = course3

    let year2 = document.querySelector('.ye1').value
    document.querySelector('.college-year-output').textContent = `completion year: ${year2}`
    
    let skill1 = document.querySelector('.skill1').value
    document.querySelector('.s1-text').textContent = skill1

    let skill2 = document.querySelector('.skill2').value
    document.querySelector('.s2-text').textContent = skill2

    let skill3 = document.querySelector('.skill3').value
    document.querySelector('.s3-text').textContent = skill3

    let skill4 = document.querySelector('.skill4').value
    document.querySelector('.s4-text').textContent = skill4

    



})
function myyFunction() {
    const element = document.querySelector(".main");
    const element1 = document.querySelector(".btn-center1");
    const element2 = document.querySelector(".final")
    
    element.remove();
    element1.remove();
    element2.style.marginTop = "0"
    element2.style.overflow = "hidden"
    

  }


// const element = document.getElementById("demo");
// element.remove();

