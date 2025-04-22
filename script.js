function calculate() {
  setInterval(() => {
    //INPUT BIRTHDATE
    let birthdate = new Date(document.getElementById("birthdate").value);

    //getTime: returns the number of milliseconds since january 1,1970
    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();

    let ageInS = ageInMs / 1000; // TO SECONDS
    let ageInMins = ageInS / 60; // TO MINUTES
    let ageInHrs = ageInMins / 60; // TO HOURS
    let ageInDays = ageInHrs / 24; // TO DAYS
    let ageInMonths = ageInDays / 30.4375; // TO MONTHS
    let ageInYears = ageInMonths / 12; //TO YEARS

    document.querySelector("#years").innerHTML = Math.floor(ageInYears);
    document.querySelector("#months").innerHTML = Math.floor(ageInMonths % 12);
    document.querySelector("#days").innerHTML = Math.floor(ageInDays % 30.4375);
    document.querySelector("#h1").innerHTML = Math.floor(ageInHrs % 24);
    document.querySelector("#minutes").innerHTML = Math.floor(ageInMins % 60);
    document.querySelector("#seconds").innerHTML = Math.floor(ageInS % 60);
    document.querySelector("#seconds").style.borderBottom = "1px grey solid";
  }, 1000);
}

function reset() {
  window.location.reload();
}
