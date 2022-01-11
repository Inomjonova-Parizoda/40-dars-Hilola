window.addEventListener('load', function(){
const text1 = document.querySelector('.text1')

text1.addEventListener('mouseover', function(){
    blue(text1,"pink");
})
text1.addEventListener('mouseout', function(){
    blue(text1,"coral");
})


function blue(text1,rang){
    text1.style.background = rang;
}


const text2 = document.querySelector('.text2')

text2.addEventListener('mouseover', function(){
    pink(text2,"darkslategrey");
})
text2.addEventListener('mouseout', function(){
    pink(text2,"teal");
})


function pink(text2,rang){
    text2.style.background = rang;
}


const text3 = document.querySelector('.text3')

text3.addEventListener('mouseover', function(){
    red(text3,"thistle");
})
text3.addEventListener('mouseout', function(){
    red(text3,"palevioletred");
})


function red(text3,rang){
    text3.style.background = rang;
}


const text4 = document.querySelector('.text4')

text4.addEventListener('mouseover', function(){
    green(text4,"lightblue");
})
text4.addEventListener('mouseout', function(){
    green(text4,"deepskyblue");
})


function green(text4,rang){
    text4.style.background = rang;
}

})