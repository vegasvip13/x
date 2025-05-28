export default async function handler(req, res) {
  const input = req.body.message;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
    {
      headers: {
        Authorization: "Bearer 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", // توکن مستقیم اینجاست
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: input,
      }),
    }
  );

  const data = await response.json();

  res.status(200).json({
    text: data.generated_text || data[0]?.generated_text || "پاسخی دریافت نشد",
  });
}
