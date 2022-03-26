exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://hadi-mirza.github.io/roulette',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    GamePage : './pages/game_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './step_definitios/*.js',
  name: 'automacao-roleta',
  translation: 'pt-BR'
}