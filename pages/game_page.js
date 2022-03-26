const { I } = inject();
const timeout = 20;

class GamePage {
  constructor() {
    this.innerWheel = '#innerWheel';
    this.spinButton = '#spin';
    this.number = "//*[@id='bet-buttons']/*[text()= '<NUMBER>']";
    this.infoResult = '//*[@id="info"][text()]';
  }

  clickNumber(number){
    I.waitForElement(this.number.replace('<NUMBER>', number), timeout);
    I.click(this.number.replace('<NUMBER>', number));
  }

}

module.exports = new GamePage();
module.exports.GamePage = GamePage;