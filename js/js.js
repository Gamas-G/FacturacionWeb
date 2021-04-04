var btn_collaps = document.getElementById('btn-collaps')
var collaps = document.getElementById('card-subitems')
var collapsActive =  collaps.classList
console.log(document.getElementsByClassName('category-card'))
btn_collaps.addEventListener('click', ()=>{
    if(!collapsActive.contains('collaps')){
        console.log('No tiene la clase')
        collaps.classList.add('collaps')
    }else{
        
        // console.log('Ya tiene la clase')
        collaps.classList.remove('collaps')
    }
})