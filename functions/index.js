/* eslint-disable require-jsdoc */

// const functions = require("firebase-functions");
const dotenv = require("dotenv");
dotenv.config();

const {setGlobalOptions} = require("firebase-functions/v2");
setGlobalOptions({maxInstances: 10});

const {onValueCreated} = require("firebase-functions/v2/database");

const postmark = require("postmark");
const client = new postmark.ServerClient(process.env.POSTMARKKEY);


exports.formsubmit = onValueCreated("/submissions/{id}", (event) => {
  return sendEmail(event.data.val());
});

function sendEmail(data) {
  const confirmMailOptions = {
    MessageStream: "outbound",
    From: "chris@webboot.io",
    To: data.email,
    Subject: "Thanks for your submission",
    TextBody: `Hi ${data.name}!\n` +
    `We have received your contact request and ` +
    `will get back to you within a few days.`,
  };

  const captureMailOptions = {
    MessageStream: "outbound",
    From: "submissions@webboot.io",
    To: "chris@webboot.io",
    Subject: `Form submission from ${data.name || "(no name)"} ` +
    `at ${data.company || "(no company)"}`,
    TextBody: `name: ${data.name}\n` +
    `email: ${data.email}\n` +
    `company: ${data.company}\n` +
    `location: ${data.location}\n` +
    `phone: ${data.phone}`,
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
