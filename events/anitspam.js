module.exports = member => {
var anti_spam = require("discord-anti-spam");
 
antispam(<Client>, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned. 
  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned. 
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned. 
  warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast. 
  banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it. 
  maxDuplicatesWarning = 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned 
  maxDuplicatesBan = 10 // Maximum amount of duplicate messages a user can send in a timespan before getting banned 
});
};