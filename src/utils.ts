function sendDiscordWebhook(content: string) {
  const channelId = process.env.DISCORD_PAYMENT_LOG_CHANNEL;

  if (!channelId) {
    return;
  }

  fetch(`https://discord/api/channels/${channelId}/webhooks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      username: "Hapixel Logs",
    }),
  }).catch(console.log);
}
