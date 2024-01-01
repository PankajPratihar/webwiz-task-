// console.log("hello world")
// console.log("code is running....")
const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['black','red','green','pink','violet','yellow'];
body.style.backgroundColor='violet';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex]
})
 alert("changed theme successfully")
 function triggerBtnClick()
 {
     document.getElementById('btn').click();
 }