import axios from "axios";
import fetch from "node-fetch";
import { CLIENT, SECRET, PAYPAL_API, PORT } from "../config";

export const createOrder = async (req, res) => {
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "105.70",
        },
      },
    ],
    application_context: {
      brand_name: "mycompany.com",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${req.protocol}://${req.hostname}:${PORT}/capture-order`,
      cancel_url: `${req.protocol}://${req.hostname}:${PORT}/cancel-payment`,
    },
  };

  console.log(body.application_context)

  // const access_token = Buffer.from(`${CLIENT}:${SECRET}`).toString("base64");

  // const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
  //   method: "POST",
  //   body: JSON.stringify(body),
  //   headers: {
  //     Authorization: `Basic ${access_token}`,
  //     "Content-Type": "application/json",
  //   },
  // });
  // const data = await response.json();

  // using axios
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, body, {
    auth: {
      username: CLIENT,
      password: SECRET,
    },
  });

  res.json(response.data);
};

export const captureOrder = async (req, res) => {
  const { token } = req.query;

  const access_token = Buffer.from(`${CLIENT}:${SECRET}`).toString("base64");
  const response = await fetch(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${access_token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  // res.json(data);
  res.redirect("/payed.html");
};

export const cancelPayment = (req, res) => {
  res.redirect("/");
};
