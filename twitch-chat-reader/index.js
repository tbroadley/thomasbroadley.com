var client;
var messageQueue = [];
var timerId;

var onlySubscribers;
var wordsToFilterBy = [];
var usersToFilterBy = [];

var volume = 0.5;
var filterChatCommands = true;

function addChangeListener(id, callback) {
  document.getElementById(id).addEventListener('change', callback);
}

function intersection(source, comparison) {
  return source.filter(function(element) {
    return comparison.indexOf(element) !== -1;
  });
}

function containsWord(string, filterBy) {
  var wordArray = string.split('').filter(function(character) {
    return character.match(new RegExp(/[\w\s]/));
  }).join('').toLowerCase().split(/\s/);

  return intersection(wordArray, filterBy).length > 0;
}

function updateChannel(channelName) {
  if (client) client.disconnect();
  client = new irc.client({
    channels: [channelName]
  });

  messageQueue = [];

  client.on('message', function(channel, user, message) {
    if (onlySubscribers && !user.subscriber) return;
    if (wordsToFilterBy.length > 0 && !containsWord(message, wordsToFilterBy)) return;
    if (filterChatCommands && message.substring(0, 1) === '!') return;
    if (usersToFilterBy.indexOf(user.username) !== -1) return;

    messageQueue.push(message);
  });

  client.connect();
}

function getQueryParameters() {
  var queryString = window.location.search.substring(1);
  var queryPairs = queryString.split('&').map(function(string) {
    return string.split('=');
  });

  var result = {};
  queryPairs.forEach(function(pair) {
    result[pair[0]] = pair[1];
  });
  return result;
}

var channel = getQueryParameters().channel;
if (channel) {
  updateChannel(channel)
  document.getElementById('channel').value = channel;
};

addChangeListener('channel', function(e) {
  updateChannel(e.target.value);
});

addChangeListener('subscriber', function(e) {
  onlySubscribers = e.target.checked;
});

addChangeListener('word_list', function(e) {
  wordsToFilterBy = e.target.value.trim().toLowerCase().split('\n');
});

addChangeListener('exclamation', function(e) {
  filterChatCommands = e.target.checked;
});

addChangeListener('user_list', function(e) {
  usersToFilterBy = e.target.value.trim().toLowerCase().split('\n');
});

addChangeListener('volume', function(e) {
  volume = e.target.value;
});

function pollForMessages() {
  timerId = setInterval(function() {
    if (messageQueue.length > 0) {
      clearInterval(timerId);
      readMessages();
    }
  }, 1000);
}

function readMessages() {
  for (var i = 0; i < messageQueue.length; i++) {
    var message = messageQueue[i];
    var utterance = new SpeechSynthesisUtterance(message);
    utterance.volume = volume;
    console.log(volume);
    utterance.rate = 0.5;

    window.speechSynthesis.speak(utterance);
  }

  messageQueue = [];

  pollForMessages();
}

pollForMessages();
