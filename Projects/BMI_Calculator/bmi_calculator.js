const form= document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value) //-->// this usecase will give you empty

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`;
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        let guide;
        if(bmi<18.6){
            guide="You are under weight";
        }else if(bmi<24.9){
            guide="You are weight is normal"; 
        }else{
            guide="You are over weight";
        }
        results.innerHTML=`<span>${bmi}</br>${guide}</span>`;
    }
})