var i = 0;
var txt = 'My passion is to share my love for the sport to other athletes and develop their desire to become the best volleyball athlete. -Aleiah Torres'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
