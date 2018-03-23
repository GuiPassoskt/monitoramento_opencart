angular.module('textToSpeech', [])
.factory('textToSpeech', ['$timeout', '$q', function($timeout, $q) {
  var ready = false;
  var readyCallback;
  responsiveVoice.OnVoiceReady = function() {
    if (ready === false) {
      if (readyCallback !== undefined) {
        readyCallback.call();
      }
      ready = true;
    }
  }
  return {
    isReady: function() {
      return ready;
    },
    onVoiceReady: function(callback) {
      readyCallback = callback;
    },
    speak: function(text, voice, options) {
      var q = $q.defer();
      if (voice === undefined) {
        voice = 'Brazilian Portuguese Female';
      }
      if (options === undefined) {
        options = {};
      }
      options.onend = function() {
        q.resolve();
      }
      $timeout(function() {
        try {
          responsiveVoice.speak(text, voice, options);
        } catch (err) {
          q.reject(err);
        }
      }, 1);
      return q.promise;
    }
  }
}]);
