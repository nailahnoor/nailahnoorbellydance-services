export default async function handler(req, res) {
  console.log("🔥 API HIT");

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;

  console.log("ENV CHECK:");
  console.log("SHEET_ID:", SHEET_ID);
  console.log("API_KEY EXISTS:", !!API_KEY);
  console.log("API_KEY LENGTH:", API_KEY?.length);

  // 🚨 HARD STOP IF ENV IS BROKEN
  if (!SHEET_ID || !API_KEY) {
    console.log("🚨 MISSING ENV VARS");
    return res.status(500).json({
      error: "Missing environment variables",
      sheet: !!SHEET_ID,
      apiKey: !!API_KEY,
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("📦 RAW BODY:", req.body);

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ allowed: false });
  }

  const normalizedInput = email
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s/g, "");

  console.log("📧 INPUT:", normalizedInput);

  const ranges = [
    "in-studio registrations to mailchimp!C:C",
    "online registrations to mailchimp!C:C",
  ];

  try {
    const results = await Promise.all(
      ranges.map(async (range) => {
        const url =
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/` +
          `${encodeURIComponent(range)}?key=${API_KEY}`;

        console.log("🌐 FETCH URL (hidden key):", url.replace(API_KEY, "***"));

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
          console.log("🚨 GOOGLE ERROR:", data.error);
        }

        return data;
      })
    );

    let emails = [];

    for (const sheet of results) {
      if (!sheet?.values) continue;

      for (const row of sheet.values) {
        if (!row?.[0]) continue;

        const cleaned = row[0]
          .toString()
          .trim()
          .toLowerCase()
          .replace(/\s/g, "");

        if (cleaned.includes("@")) {
          emails.push(cleaned);
        }
      }
    }

    console.log("📧 TOTAL:", emails.length);
    console.log("📧 SAMPLE:", emails.slice(0, 5));

    const exists = emails.includes(normalizedInput);

    console.log("🔍 EXISTS:", exists);

    return res.status(200).json({
      allowed: !exists,
      debug: {
        input: normalizedInput,
        found: exists,
        total: emails.length,
      },
    });
  } catch (err) {
    console.log("💥 GLOBAL ERROR:", err);

    return res.status(500).json({
      allowed: false,
      error: "server_error",
    });
  }
}