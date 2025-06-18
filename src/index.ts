import express from "express";
import { sendDiscordWebhook } from "./utils";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = Number(process.env.PORT) || 3000;

app.post("/api/v1/payment/webhook", async (req, res) => {
  const body = req.body;

  const paymentId = body.data?.id;
  
  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer APP_USR-8612696940706203-061716-ae3d2cb129ad9bf0f9561d686d6d97ae-2504769032`,
        },
      }
    );

    const payment = await response.json();

    const status = payment.status;
    const statusDetail = payment.status_detail;
    const amount = payment.transaction_amount;
    const email = payment.payer?.email;
    const description = payment.description;

    console.log(`Payment ID ${paymentId} -> Status: ${status}`);
  } catch (error) {
    console.log(error);
  }

  res.json({ message: "ok" });
});

app.listen(PORT, () => console.log("API is running on port " + PORT));
