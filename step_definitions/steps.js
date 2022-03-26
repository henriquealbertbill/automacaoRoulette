const { I , GamePage } = inject();
const timeout = 20;

Given('que estou na pagina do jogo de roleta', () => {
I.amOnPage('/');
I.waitForElement(GamePage.innerWheel, timeout);
});

Given('que eu selecionei o numero {string}', (number) => {
  GamePage.clickNumber(number);
});

When('eu clicar em spin', () => {
  I.waitForElement(GamePage.spinButton, timeout);
  I.dontSeeElement(GamePage.infoResult, timeout);
  I.click(GamePage.spinButton);
});

Then('eu vejo o resultado na tela', () => {
  I.waitForElement(GamePage.infoResult, timeout);
});
