/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "SET YOUR COOKIE HERE",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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","sessionKey=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"
    ,
  ],
  Cookiecounter: 1,
  CookieIndex: 0,
  ProxyPassword: "123",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
