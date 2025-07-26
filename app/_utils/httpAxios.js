const { default: axios } = require("axios");

const SENDEMAIL = async (data) => {
// console.log("Data");

// console.log("Sending email with data:", data);

  try {
    await axios.post('/api/send', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("SENDEMAIL error:", error);
  }
};

export default {
  SENDEMAIL
};
