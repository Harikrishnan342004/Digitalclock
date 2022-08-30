let clock = () => 
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
   
  

// AM amd PM process ....................... ..........
let period = "AM";
if (hours == 0) hours = 12;

if( hours > 12)
{
    hours = hours - 12;
    period = "PM";
}


hours = hours < 10 ? `${hours} `+hours : hours;
minutes = minutes < 10 ? `0${minutes}`+ minutes : minutes;
seconds = seconds < 10 ? `0${seconds}`+ seconds : seconds;



let time = `   ${hours}     :     ${minutes}   :     ${seconds}  :     ${period}`
document.getElementById("clock").innerText = time ;

console.log(time);
};
 
// calling the clock function ...........
clock();






// Date setup .............

document.getElementById("date").innerHTML = Date();
