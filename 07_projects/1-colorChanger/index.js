
const changer = document.querySelectorAll('.button')
const body = document.querySelector('body')

changer.forEach(function(btn){
    btn.addEventListener('click', function(e){

        if(e.target.id === 'grey' ){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'darkred' ){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'blue' ){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'yellow' ){
            body.style.background = e.target.id;
        }
    })
})