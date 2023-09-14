// place files you want to import through the `$lib` alias in this folder.

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
export const sendEmail = async (data) => {
  return await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: data.to, name: '' }],
        },
      ],
      from: {
        email: data.from,
        name: '',
      },
      subject: data.subject,
      content: [
        {
          type: 'text/plain',
          value: data.textBody,
        },
      ],
    })
  });
}