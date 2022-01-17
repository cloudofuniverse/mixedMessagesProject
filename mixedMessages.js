//Tarot Cards Project

const majorCards = ["Juggler", "Magician", "Papess","Empress", "Emperor", "Pope", "Lovers","Chariot", "Justice", "Hermit","Wheel of Fortune","Strength","Fortitude","Hanged Man", "Death", "Temperance", "Devil", "Lighting Strike","Star","Moon","Sun","Last Judgment","Universe","Fool"];

const fortuneNumber = Math.floor(Math.random()*365);
const majorCardIndex = Math.floor(Math.random()*majorCards.length);

const zodiacSign = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpius",
                    "Sagittarius", "Capricornus","Aquarius","Pisces"];

const returnNumberSign = () => {
  let fortuneArray = [];
  fortuneArray.push(fortuneNumber);
  switch(fortuneNumber%12){
    case 0 :
      fortuneArray.push(zodiacSign[0]);
      break;
    case 1 :
      fortuneArray.push(zodiacSign[1]);
      break;
    case 2 :
      fortuneArray.push(zodiacSign[2]);
      break;
    case 3 :
      fortuneArray.push(zodiacSign[3]);
      break;
    case 4 :
      fortuneArray.push(zodiacSign[4]);
      break;
    case 5 :
      fortuneArray.push(zodiacSign[5]);
      break;
    case 6 :
      fortuneArray.push(zodiacSign[6]);
      break;
    case 7 :
      fortuneArray.push(zodiacSign[7]);
      break;
    case 8 :
      fortuneArray.push(zodiacSign[8]);
      break;
    case 9 :
      fortuneArray.push(zodiacSign[9]);
      break;
    case 10 :
      fortuneArray.push(zodiacSign[10]);
      break;
    case 11 :
      fortuneArray.push(zodiacSign[11]);
      break;
    default:
      fortuneArray.push("No sign for your fortune!")
  };
  return fortuneArray
};

const completeFortune = () => {
  const finalFortune = returnNumberSign();
  finalFortune.push(majorCards[majorCardIndex]);
  return finalFortune
}; 

const formatFortune = () => {
  const readCards = completeFortune();
  return `Your fortune number is ${readCards[0]}. You have maximal compatibility with ${readCards[1]}. Your tarot card of the day is: The ${readCards[2]}.`
};

function toHTML() {
  document.getElementById("fortuneText").innerHTML = formatFortune();
}