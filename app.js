//DEFINE DATE
const dateValue = document.querySelector('.datepicker');
const message = document.querySelector('.message');


function getDate(e) {
  //INPUT VALUE OF DATE ASSIGNMENT
  const dateV = dateValue.value;

  //CONVERTING DATE INPUT FORMAT INTO DAY,DATE,MONTH & YEAR
  const dateResult = new Date(dateV);

  //USING FORMULA FOR CALCULATING EDD, FIRSTLY SUBTRACT 3 MONTHS
  dateResult.setMonth(dateResult.getMonth() - 3);

  //console.log(dateResult);

  //THEN ADD A YEAR
  dateResult.setFullYear(dateResult.getFullYear() + 1);

  //console.log(dateResult);
console.log(dateV);
  //FINALLY ADD 7 DAYS
  dateResult.setDate(dateResult.getDate() + 7);
  const dateString = dateResult.toDateString();
console.log(dateString);
  if (!(new Date(dateV) >= new Date()) && (dateV !== '')) {
    //CALCULATING GESTATIONAL AGE USING CURRENT DATE AND DATE OF LMP

    console.log(dateV);
    const ga = Math.abs(new Date() - new Date(dateV));

    //CONVERTING THE MILLISECONDS FROM ABOVE INTO DAYS
    const gaFu = Math.ceil(ga / (1000 * 60 * 60 * 24));

    //CONVERTING THE DAYS INTO WEEKS
    //I DIDN'T SPECIFY DAYS + WEEKS BUT I ASSUME IT'LL HAVE TO DO WITH AN IF STATEMENT UPON THE DECIMALS
    const gaFull = gaFu / 7;

    const gestationalAge = Math.floor(gaFull);

    //OUTPUT THE ANSWER TO RESULT
    message.style.color = 'yellow';
    message.textContent = ` Your expected delivery date is ${dateString} & you are ${gestationalAge} week(s) pregnant`;

    //console.log(dateResult);
  } else if (dateV === '') {
    M.toast({ html: 'Invalid Date!' });
  } else {
    //INCASE OF ERROR
    message.style.color = 'blue';
    message.textContent = `You're from the future are'nt you? `;
  }

  e.preventDefault();
}

//EVENT LISTENER
document.querySelector('form').addEventListener('submit', getDate);