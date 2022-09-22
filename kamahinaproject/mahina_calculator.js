 // Between function to save time 
  function between(x, min, max) {
  return x >= min && x <= max;
  }
 
function calcMahinaPhase(year, month, day, hour, minute) {
  // Calculate Moon Illumination percentage
  
  // Step 1: Create date variable and prev date to calculate if moon phase is waxing or waning
  let targetDate = new Date(year+"-"+month+"-"+day+"T"+hour.toString()+":"+minute+":"+"00.000-10:00");
  let prevDate = new Date(targetDate);
  prevDate.setDate(targetDate.getDate() - 1);
  
  //Step 2: Calculate Moon Illumination for Target Date and Previous Date 
  let targetIllum = SunCalc.getMoonIllumination(targetDate).fraction;
  let prevIllum = SunCalc.getMoonIllumination(prevDate).fraction;
  
  // Step 3: Subtract prev date from target date to get sign
  let illumDiff = targetIllum - prevIllum;

  // Step 4: If the difference is negative, set the sign to negative
  let direction;
  if (illumDiff < 0) {
    direction = -1;
  } else {
    direction = 1;
  }

  // Step 5: Multiply target illumination by direction to get illumination with correct sign
  let correctIllum = targetIllum * direction;
  let percentage = (correctIllum * 100).toFixed(2);

  // Step 6: Convert from illumination to Hina Phase

  // Set a variable for the Mahina Phase
  let mahinaPhase;
  var mahinaPhaseImg;
  
  // Waxing Phases
  if (between(percentage, 0, 2.5)) {
    mahinaPhase = 'Hilo';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f0a8de838c68d43b1e_1hilo.png";
  }
  if (between(percentage, 2.5, 5)) {
    mahinaPhase = 'Hoaka';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f0eadb33692986eb58_2hoaka.png";
  }
  if (between(percentage, 5, 12)) {
    mahinaPhase = 'Kūkahi';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f084a931cc010195c4_3kukahi.png";
  }
  if (between(percentage, 12, 20)) {
    mahinaPhase = 'Kūlua';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f02526e9475cfa247f_4kulua.png";
  }
  if (between(percentage, 20, 28)) {
    mahinaPhase = 'Kūkolu';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f0759405407e71dddc_5kukolu.png";
  }
  if (between(percentage, 28, 38)) {
    mahinaPhase = 'Kūpau';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f0753d5b9736f0415f_6kupau.png";
  }
  if (between(percentage, 38, 48)) {
    mahinaPhase = 'ʻOlekūkahi';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f191517b6129cbbc86_7olekukahi.png";
  }
  if (between(percentage, 48, 58)) {
     mahinaPhase = 'ʻOlekūlua';
     mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f1e24dc223efc0d829_8olekulua.png";
  }
   if (between(percentage, 58, 67)) {
    mahinaPhase = 'ʻOlekūkolu';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f18ecc16d1435274af_9olekukolu.png";
  }
  if (between(percentage, 67, 76)) {
    mahinaPhase ='ʻOlepau';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f291517b2657cbbcb6_10olepau.png";
  }
  if (between(percentage, 76, 84)) {
    mahinaPhase = 'Huna';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f2db5e3b7f7a43eed8_11huna.png";
  }
  if (between(percentage, 84, 91)) {
    mahinaPhase ='Mōhalu';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f1824e8d18b4345d9a_12mohalu.png";
  }
  if (between(percentage, 91, 96)) {
    mahinaPhase = 'Hua';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f29c672a35870790c4_13hua.png";
  }
  if (between(percentage, 96, 98)) {
    mahinaPhase = 'Akua';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f234e24a13b2e5f0a2_14akua.png";
  }
  if (between(percentage, 98, 100)) {
    mahinaPhase ='Hoku';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f29c672a31b10790c3_15hoku.png";
  }
  
  // Waning Phases
  if (between(percentage, -100, -97)) {
    mahinaPhase = 'Māhealani';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f29b13e0ad1d67ebed_16mahealani.png";
  }
  if (between(percentage, -97, -96)) {
    mahinaPhase = 'Kulu';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f2221d38482ca93be0_17kulu.png";
  }
  if (between(percentage, -96, -94)) {
    mahinaPhase = 'Lāʻaukūkahi';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f22105597855073316_18laaukukahi.png";
  }
  if (between(percentage, -94, -87)) {
    mahinaPhase = 'Lāʻaukūlua';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f21d11a13dc63f0f91_19laaukulua.png";
  }
  if (between(percentage, -87, -78)) {
    mahinaPhase = 'Lāʻaupau';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f235319d68cf50fb76_20laaupau.png";
  }
  if (between(percentage, -78, -68)) {
    mahinaPhase = 'ʻOlekūkahi';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f218c7404dd9c4b5c8_21olekukahi.png";
  }
  if (between(percentage, -68, -56)) {
    mahinaPhase = 'ʻOlekūlua';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f2f338be0ed9291ad2_22olekulua.png";
  }
   if (between(percentage, -56, -44)) {
    mahinaPhase = 'ʻOlepau';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f18ecc1685c75274aa_23olepau.png";
  }
  if (between(percentage, -44, -33)) {
    mahinaPhase = 'Kāloakūkahi';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f0eadb337c5a86eb59_24kaloakukahi.png";
  }
  if (between(percentage, -33, -22)) {
    mahinaPhase = 'Kāloakūlua';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f184a9319a920195c5_25kaloakulua.png";
  }
   if (between(percentage, -22, -13)) {
    mahinaPhase = 'Kāloapau';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f1433ca74bc294f439_26kaloapau.png";
  }
  if (between(percentage, -13, -6)) {
    mahinaPhase = 'Kāne';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f118c74010abc4b5c7_27kane.png";
  }
  if (between(percentage, -6, -4)) {
    mahinaPhase = 'Lono';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f164b0167826d1186c_28lono.png";
  }
  if (between(percentage, -4, -1)) {
    mahinaPhase = 'Mauli';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f175940565ab71dddd_29mauli.png";
  }
  if (between(percentage, -1, -0)) {
    mahinaPhase = 'Muku';
    mahinaPhaseImg = "https://uploads-ssl.webflow.com/606b4868ee05b67ad61e0e22/624c89f1a79ecc9a9ee609e8_30muku.png";
  }
  
  // Inputting relevant phase, img, and date into results box
  const mahinaPhaseHeading = document.querySelector('h3');
  mahinaPhaseHeading.textContent = mahinaPhase;
  
  const dateHeading = document.querySelector('h4');
  dateHeading.textContent = month + '/' + day + '/' + year + " " + hour + ":" + minute;

  let mahinaPhasePlaceholder = document.querySelector('#mahinaImg');
  mahinaPhasePlaceholder.src = mahinaPhaseImg;
  mahinaPhasePlaceholder.style.display = "block";

 let mahinaResultBox = document.querySelector('#mahinaResults');
  mahinaResultBox.style.display = "flex";
  
  let mahinaCTABox = document.querySelector('#calcCTA');
  mahinaCTABox.style.display = "flex";
};




// Submit Button function
(function clickMe() {
  const button = document.getElementById("button");
  button.addEventListener("click", event => {
    // Scrape form field values
    let year = document.querySelector('#year').value;
    let month = document.querySelector('#month').value;
    let day = document.querySelector('#day').value;

    let hour = document.querySelector('#hour_dropdown').value;
    let minute = document.querySelector('#min_dropdown').value;
    let am_pm = document.querySelector('#am_pm_dropdown').value;

    // Correcting date format
    if (month.toString().length == 1) {
            month = "0" + month;
        }
    if (day.toString().length == 1) {
            day = "0" + day;
        }

    //Set to AM or PM
    if (am_pm == "PM") {
            hour = parseInt(hour) + 12;
        }
    
    //Error Message testing
    let mahinaErrorBox = document.querySelector('#mahinaError');
    let mahinaResultBox = document.querySelector('#mahinaResults');
    
    if (day > 31 || month > 12 || day < 1 || month > 12 || year < 1752){
      mahinaErrorBox.style.display = "block";
      mahinaResultBox.style.display = "none";
    } else{
      //Run mahina phase function
      calcMahinaPhase(year, month, day, hour, minute); 
      mahinaErrorBox.style.display = "none";
    }
  });
})();