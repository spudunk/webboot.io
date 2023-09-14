// place files you want to import through the `$lib` alias in this folder.
import { env } from "$env/dynamic/private";
import postmark from "postmark";

const token = env.PMKEY;
const client = new postmark.ServerClient(token || "");

/**
 * @typedef {Object} EmailData
 * @property {string} data.to
 * @property {string} data.from
 * @property {string} data.subject
 * @property {string} data.textBody 
 * @returns 
 */

/**
 * 
 * @param {EmailData} data 
 * @returns 
 */
export const sendEmail = (data) => {
  const msg = client.sendEmail({
    "From": data.from,
    "To": data.to,
    "Subject": data.subject,
    // "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    "TextBody": data.textBody,
    "MessageStream": "outbound"
  });
  console.log(msg);
  return msg;
}


