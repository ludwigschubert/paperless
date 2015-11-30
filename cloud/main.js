require('cloud/app.js');
const twilio = require("twilio");

// Data Consistency

Parse.Cloud.beforeSave("Message", function(request, response) {
  const message = request.object;
  if (!message.get("patron")) {
    response.error("Every Message must have a patron assigned.");
  } else {
    response.success();
  }
});

Parse.Cloud.beforeSave("Patron", function(request, response) {
  const patron = request.object;
  if (!patron.get("phoneNumber")) {
    response.error("Every Patron must have a phone number assigned.");
  } else {
    response.success();
  }
});


// Update Notifications

Parse.Cloud.afterSave("Message", function(request, response) {
  const message = request.object;
  Parse.Cloud.httpRequest({
    url: 'https://pubsub.pubnub.com/publish/pub-c-a0daec15-afc0-4588-9b0a-e419807f5882/sub-c-17e1a790-9737-11e5-b829-02ee2ddab7fe/0/new-message/0/%22' + message.id + '%22',
    success: function(httpResponse) {
      console.log("Sent Push for new message " + message.id);
      console.log(httpResponse.text);
    },
    error: function(httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });

  // Include the Twilio Cloud Module and initialize it
  twilio.initialize("ACdadc5e160dcf3b90e6ecdd1c0799c3ab","2f87472519ba1224f9376fdc0b1fb1c7");

  twilio.sendSMS({
    From: "+16503979734",
    To: message.patron.phoneNumber,
    Body: message.text
  }

});

Parse.Cloud.afterSave("Patron", function(request, response) {
  const patron = request.object;
  Parse.Cloud.httpRequest({
    url: 'https://pubsub.pubnub.com/publish/pub-c-a0daec15-afc0-4588-9b0a-e419807f5882/sub-c-17e1a790-9737-11e5-b829-02ee2ddab7fe/0/new-patron/0/%22' + patron.id + '%22',
    success: function(httpResponse) {
      console.log("Sent Push for new message " + patron.id);
      console.log(httpResponse.text);
    },
    error: function(httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });
});