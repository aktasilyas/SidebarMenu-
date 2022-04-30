var menu=document.querySelector('.menuToggle');
var navigation =document.querySelector('.navigation');
var list =document.querySelectorAll('.list');
menu.addEventListener('click',function() {
    navigation.classList.toggle('active')
})

function activeLink(){
    list.forEach((item)=>{
        item.classList.remove('active');
        this.classList.add('active');
    })
}

list.forEach((item)=>{
    item.addEventListener('click',activeLink)
})