import fetch from "node-fetch";
import iconv from "iconv-lite";

export default async function handler(req, res) {
  const server = req.query.server;

  if (!server || !["3","4","5","6","7"].includes(server)) {
    res.status(400).json({ error: "Neplatný server" });
    return;
  }

  try {
    // URL původního backendu
    const url = `https://ph-tools-backend-psm4.vercel.app/api/server?server=${server}`;

    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });

    const buffer = Buffer.from(await response.arrayBuffer());
    const text = iconv.decode(buffer, "windows-1250");

    const lines = text.replace(/\r/g,'').split('\n');

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).json({ data: lines });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chyba při načítání dat" });
  }
}
