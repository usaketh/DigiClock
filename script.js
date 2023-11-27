let dateElement = document.getElementById("date");
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let heroElement = document.querySelector(".hero");

setInterval(()=>{
    let currentTime = new Date();
    let hours = currentTime.getHours();

    if (hours >= 6 && hours < 12) {
        // Morning
        heroElement.style.background = "linear-gradient(45deg, #ff7e5f, #feb47b)";
    } else if (hours >= 12 && hours < 18) {
        // Afternoon
        heroElement.style.background = "linear-gradient(45deg, #30197d, #235fa6)";
    } else {
        // Evening/Night
        heroElement.style.background = "linear-gradient(45deg, #08001f, #30197d)";
    }
    hrs.innerHTML = (hours<10?"0":"") + hours;
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentTime);

    dateElement.innerHTML = formattedDate;


}, 1000);



