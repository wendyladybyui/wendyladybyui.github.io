document.addEventListener('DOMContentLoaded', function() {
    
    var a = new Date();
    var b = new Date();
        console.log(b - a);
            localStorage.a = a;
            localStorage.b = b;
    a = Date.parse(localStorage.a);
    b = Date.parse(localStorage.b);
        c = (b - a); 


document.getElementById("lastvisit").textContent = c;
})