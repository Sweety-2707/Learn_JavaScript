const body = document.querySelector('body')
const bgcolor = document.querySelectorAll('.bgbuttons')
const textcolor = document.querySelectorAll('.textbuttons')
bgcolor.forEach( function (button){
    button.addEventListener('click', function (e){
        body.style.backgroundColor = e.target.id;
    })
})

textcolor.forEach( function(button){
    button.addEventListener('click', function (e){
        body.style.color=e.target.id
    })
})