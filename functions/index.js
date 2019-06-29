const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.processNotification = functions
.firestore
.document('notifications/processing/all/{notificationId}') // Feel free to change the path
.onCreate(async (snap, context) => {

  let pushManager = new (require('push-manager'));
  let options = {
    processingPath: 'notifications/processing/all/{notificationId}', // Path where you store notification payloads. Can be anything but must be the same as the path from line 3
    subscriptionsPath: 'notifications/subscriptions/all', // Path where you store your tokens
  };
  let result = await pushManager.process(admin, snap, context, options);

  return new Promise((resolve, reject) => {
    resolve();
  })

});
