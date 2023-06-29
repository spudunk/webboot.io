/* eslint-disable */
// const functions = require("firebase-functions");

const { setGlobalOptions } = require("firebase-functions/v2");
setGlobalOptions({ maxInstances: 10 });

const { onValueCreated } = require("firebase-functions/v2/database");

const postmark = require("postmark");
var client = new postmark.ServerClient(process.env.POSTMARKKEY);

// console.log("cloud function running...");

exports.formsubmit = onValueCreated("/submissions/{id}", (event) => {
  console.log(event);
  return sendEmail(event.data.val());
});

// Send welcome email to new users
function sendEmail(data) {
  console.log("function sendEmail triggered");

  const confirmMailOptions = {
    MessageStream: "outbound",
    From: "chris@webboot.io",
    To: data.email,
    Subject: "Thanks for your submission",
    TextBody: `Hi ${data.name}! We have received your contact request and will get back to you withing a few days.`,
  };

  const captureMailOptions = {
    MessageStream: "outbound",
    From: "submissions@webboot.io",
    To: "chris@webboot.io",
    Subject: `Form submission from ${data.name} at ${
      data.company || "(no company)"
    }`,
    TextBody: `name: ${data.name}
email: ${data.email}
company: ${data.company}
location: ${data.location}
phone: ${data.phone}`,
  };

  client
    .sendEmail(confirmMailOptions)
    .then(() => console.log(`Confirmation email sent to ${data.email}`))
    .catch((e) => console.error(`Error sending capture email: ${e}`));

  client
    .sendEmail(captureMailOptions)
    .then(() => console.log("Capture email sent"))
    .catch((e) => console.error(`Error sending capture email: ${e}`));
}
