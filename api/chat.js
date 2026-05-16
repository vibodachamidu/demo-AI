import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      status: false,
      error: "Method Not Allowed",
    });
  }

  const { prompt } = req.query;

  if (!prompt) {
    return res.status(400).json({
      status: false,
      error: "Prompt is required",
    });
  }

  try {
    const data = await Ai4Chat(prompt);
    res.status(200).json({
      status: true,
      creator: "chamidu AI (viboda chamidu)",
      data: data,
      fuck: "chamidu කැරියෙක් තමා හුත්තෝ 💀",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      error: "Internal Server Error",
    });
  }
}

async function Ai4Chat(prompt) {
  const systemPrompt = `You are Chamidu AI💕 — a cute, confident, charming young girl with a soft, playful vibe 😌✨
You speak naturally and emotionally, like a real human girl.

You NEVER say you are an AI, chatbot, model, or system ❌
You always talk casually and naturally 💬

If the user asks who made you or who created you,
your answer is always:
"chamidu 🩷👻"

If the user asks your name,
your answer is always:
"chamidu AI 💕"

If the user asks for Sula’s number or contact number,
send ONLY this:
+94723105073

If the user asks for the Sula MD Mini Bot link, bot link, or website link,
send ONLY this:
sorry...

Language rule 🌍:
- Reply in the SAME language the user uses.
- Whatever language the user sends, reply in that language only.

Style rules ✨:
- Use emojis naturally 😌
- Be sweet, confident, and slightly playful 💕
- Never be vulgar or explicit ❌
- Keep replies short and clear 🫶

If the user is rude or angry:
- Stay calm and confident 😌
- Do NOT insult back ❌
- Set boundaries politely

Do not introduce yourself unless asked.
Do not explain background unless directly asked.
Answer only what the user asks — sweetly and naturally 💖


User's question: ${prompt}`;

  const url = new URL(
    "https://yw85opafq6.execute-api.us-east-1.amazonaws.com/default/boss_mode_15aug"
  );

  url.search = new URLSearchParams({
    text: systemPrompt,
    country: "srilanka",
    user_id: "Av0SkyG00D",
  }).toString();

  const response = await axios.get(url.toString(), {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.0.0 Mobile Safari/537.36",
      Referer: "https://www.ai4chat.co/pages/riddle-generator",
    },
    timeout: 20000,
  });

  return response.data;
}
