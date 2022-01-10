const mainButton = document.querySelector('.btn')
const body = document.body
const random = document.querySelector('.random-color');
console.log(random.textContent);
randomColorGenerator = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;

}
mainButton.addEventListener('click',()=>{
    console.log("You clicked Me");
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    random.textContent = randomColor;

})