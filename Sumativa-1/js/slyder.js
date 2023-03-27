(function(){

    const slyders=[...document.querySelectorAll('.testimony_body')];
    const buttonext = document.querySelector('#next');
    const buttonbefore = document.querySelector('#before');
    let value;
    
    buttonext.addEventListener('click', ()=>{
        changeposition(1);
        
    });

    buttonbefore.addEventListener('click', ()=>{
        changeposition(-1);
    });

    const changeposition= (add)=>{
        const currenttestimony= document.querySelector('.testimony_body--show').dataset.id;

        value=number (currenttestimony);
        value+= add;

        slyders[number(currenttestimony)-1].classList.remove('testimony_body--show');

        if(value=== slyders.length+1 || value===0 ){
            value= value=== 0? slyders.length :1 ;

        }

        slyders[value-1].classList.add('testimony_body--show');

    }

    

})();
