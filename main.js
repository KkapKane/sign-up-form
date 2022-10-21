const spans = document.querySelectorAll('span');
const rainbtn = document.querySelector('.rain-toggle')
const cloud = document.querySelector('.cloud');
var rainOn = false;

var opacityLvl = 1;
var speed = 15;
var isDark = false;
var pole = document.getElementsByClassName("pole")
var darkmodeColor = "#0a2a43"
var lightmodeColor = "#5aa0d7"
spans.forEach(slowdown)
leftside = document.querySelector('.left')
topside = document.querySelector('.top')
botside = document.querySelector(".bottom");
middle = document.querySelector(".middle");

function slowdown(element) {
element.style.animationDuration = "calc(+" + speed +"s/var(--i))";
}

function changeOpacity(element) {
    element.style.opacity = opacityLvl
}

function darkMode(element) {
    
    element.style.backgroundColor = darkmodeColor;
    
    
}

function lightMode(element) {
    element.style.backgroundColor = lightmodeColor;   
}




document.querySelector('body').addEventListener('mouseup', (e) => {
    speed = 15;
    spans.forEach(slowdown)
})
document.querySelector("body").addEventListener("mousedown", (e) => {
  speed = 100;
  spans.forEach(slowdown);
});

document.querySelector(".rain-toggle").addEventListener("click", (e) => {
    if (rainOn == true) {
        speed = 15;
        spans.forEach(slowdown)
        opacityLvl = 1;
        spans.forEach(changeOpacity);
        
        rainOn = false;
    } else
        {
            speed = 0;
        spans.forEach(slowdown)
        opacityLvl = 0;
        spans.forEach(changeOpacity)
            rainOn = true;
        }

})

document.querySelector(".darkmode").addEventListener('click', (e) => {
    if (isDark == false) {
        darkMode(leftside);
        darkMode(topside);
        darkMode(middle);
        darkMode(botside);
        //cloud.style.backgroundColor = 'red'
        document.documentElement.style.setProperty(
            "--darkmode",
            "0 35px 40px -35px #fff, 0 35px 40px -35px #fff,0 15px 60px #fff"
        );
        document.documentElement.style.setProperty(
          "--lightOn",
          "rgb(234, 235, 235)"
        );
        document.documentElement.style.setProperty(
          "--cloudColor",
          "rgb(64,69,65)"
        );
        document.documentElement.style.setProperty(
          "--dayPole",
          "linear-gradient(to left, rgb(201, 174, 174), rgb(99, 81, 81), rgb(52, 46, 46), rgb(36, 29, 29))"
        );
        document.documentElement.style.setProperty(
          "--dayPoleTop",
          "radial-gradient(ellipse at 80px 40px,  rgb(60, 46, 46), rgb(192, 162, 162), rgb(104, 99, 99), rgb(66, 53, 53))"
        );
        isDark = true;
    }
    else
    {
        
        lightMode(leftside);
        lightMode(topside);
        lightMode(middle);
        lightMode(botside);
         
        document.documentElement.style.setProperty(
          "--darkmode",
          "0"
        );
        document.documentElement.style.setProperty(
          "--lightOn",
          "rgb(150, 150, 150)"
        );
        
        document.documentElement.style.setProperty(
          "--cloudColor",
          "rgb(255,255,255)"
        );
        document.documentElement.style.setProperty(
          "--dayPole",
          "linear-gradient(to left,  rgb(41, 35, 35), rgb(102, 94, 94), rgb(184, 179, 179), rgb(100, 95, 95))"
        );
        document.documentElement.style.setProperty(
          "--dayPoleTop",
          "linear-gradient(to top,  rgb(41, 35, 35), rgb(102, 94, 94), rgb(184, 179, 179), rgb(100, 95, 95))"
        );
        isDark = false;
    }
});

