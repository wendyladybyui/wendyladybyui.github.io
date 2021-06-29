document.addEventListener('DOMContentLoaded', function() {
    
    var a = new Date();
    var b = new Date();
        console.log(b - a);
            localStorage.a = a;
            localStorage.b = b;
    a = Date.parse(localStorage.a);
    b = Date.parse(localStorage.b);
        c = (b - a); 
        if (c < 0) {
            output= c;
        }
        else {
            output = 0;
        }


document.getElementById("lastvisit").value = output;
})