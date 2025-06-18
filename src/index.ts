import express from "express";
import { MercadoPagoConfig, Preference } from "mercadopago";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = Number(process.env.PORT) || 3000;

app.post("/api/v1/payment/webhook", (req, res) => {
  console.log(req);
  sendDiscordWebhook("Test");

  res.json({ message: "ok" });
});

app.listen(PORT, () => console.log("API is running on port " + PORT));
