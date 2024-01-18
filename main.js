let imageChanger = [
    'img/hero1.jpg',
    'img/hero2.jpg',
    'img/hero3.jpg',
    'img/hero4.jpg',
    'img/hero5.jpg',
    'img/hero6.jpg',
    'img/hero7.jpg'
]
let product = [
    {name: 'dope polo', img: 'img/hero7.jpg'},
    {name: 'dope polo', img: 'img/hero6.jpg'},
    {name: 'dope polo', img: 'img/hero5.jpg'},
    {name: 'dope polo', img: 'img/hero4.jpg'},
    {name: 'dope polo', img: 'img/hero3.jpg'},
    {name: 'dope polo', img: 'img/hero2.jpg'}
]
let changeIndex = 0
function change(){
    let img = document.getElementsByClassName('hero-img')[0]
    img.src = imageChanger[changeIndex]
    changeIndex = changeIndex + 1
    if(changeIndex>=imageChanger.length){
        changeIndex = 0
    }
}
change()

    setInterval(() => {
        change()
    }, 8000);

// function addProduct(imgUrl, name){
//     product.push({imgUrl, name})
// }  
// function deleteProduct(x){
//     product.splice(x, 0)
// }  
let productContainer = document.getElementsByClassName('section-two')[0]


for(i=0; i>product.length;i++){

}


// window.addEventListener('DOMContentLoaded', ()=>{
//     let test = document.getElementsByTagName('figure')
//     let testing = test.length
//     let divider = Math.ceil(testing/2)
//     let totalHeight = 100
//     let height  = (totalHeight /divider)-5
//     console.log(testing, divider, height)
//     for(i=0 ; i< testing; i++){
//          test[i].style.maxHeight = height.toString()+'vw'
//          test[i].style.minHeight = height.toString()+'vw'
//          console.log( height.toString()+'%')
//          console.log(test[i].style)
//     }
// })
let section = document.getElementsByClassName('section-two')[0]
for (i=0; i<product.length; i++){
    let figure = document.createElement('figure')
    const products = product[i]
    figure.innerHTML=`
        <img src=${products.img} alt="" class="v">
        <figcaption>${products.name}</figcaption>
        <a href='https://wa.link/cx66vv' class='a'> BUY NOW</a>
    `
    section.append(figure)
}