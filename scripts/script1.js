document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function go(Fname, Lname, age){
        if(age<18){
            return Fname+' '+Lname+' : '+"you are not eligible for giving the entrance exam";
        }
        else{
            return Fname+' '+Lname+' : '+"you are legal";
        }
        }
        alert(go(prompt(), prompt(), prompt()))
        
});

