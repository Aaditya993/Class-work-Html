
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById("loc").innerHTML = 
                "Latitude: " + position.coords.latitude + 
                "<br>Longitude: " + position.coords.longitude;
        }, function(error) {
            document.getElementById("loc").innerHTML = "Error: " + error.message;
        });
    } else {
        document.getElementById("loc").innerHTML = "Geolocation is not supported by this browser.";
    }
}


const shapesBg = document.querySelector('.shapes-background');
let animationStep = 0;

function animateBackground() {
  
    const positions = [
        ['0px 0px', '50px 50px', '100px 100px'],  
        ['50px 50px', '100px 100px', '0px 0px'],  
        ['100px 100px', '0px 0px', '50px 50px']   
    ];
    const opacities = [1, 0.7, 1];  

    shapesBg.style.setProperty('--p1', positions[animationStep][0]);
    shapesBg.style.setProperty('--p2', positions[animationStep][1]);
    shapesBg.style.setProperty('--p3', positions[animationStep][2]);
    shapesBg.style.setProperty('--op', opacities[animationStep]);

    animationStep = (animationStep + 1) % positions.length;  
}


window.addEventListener('load', function() {
    animateBackground();  
    setInterval(animateBackground, 4000);  
});