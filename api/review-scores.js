/**
 * Vercel Serverless: Google Places API (New) で星評価を取得。キー未設定時はフォールバック。
 * 環境変数: GOOGLE_MAPS_API_KEY, GOOGLE_PLACE_ID（ChIJ…形式）
 * 任意: GOOGLE_MAPS_URL_FALLBACK, GOOGLE_RATING_FALLBACK, TABELOG_URL, TABELOG_RATING
 */
const TABELOG_DEFAULT_URL = "https://tabelog.com/osaka/A2701/A270201/27152697/";
const GOOGLE_SEARCH_FALLBACK =
  "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9D%B1%E5%BF%83%E6%96%8E%E6%A9%8B1-14-15%20%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%93%E3%83%AB%204F";

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const tabelogUrl = process.env.TABELOG_URL || TABELOG_DEFAULT_URL;
  const tabelogRating = Number.parseFloat(process.env.TABELOG_RATING || "3.72");

  let google = {
    rating: Number.parseFloat(process.env.GOOGLE_RATING_FALLBACK || "4.8"),
    user_ratings_total: null,
    url: process.env.GOOGLE_MAPS_URL_FALLBACK || GOOGLE_SEARCH_FALLBACK,
  };

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  let placeId = process.env.GOOGLE_PLACE_ID || "";
  if (apiKey && placeId) {
    placeId = placeId.replace(/^places\//, "");
    try {
      const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
      const r = await fetch(url, {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
        },
      });
      if (r.ok) {
        const j = await r.json();
        if (typeof j.rating === "number" && Number.isFinite(j.rating)) {
          google = {
            rating: j.rating,
            user_ratings_total:
              typeof j.userRatingCount === "number" ? j.userRatingCount : null,
            url: typeof j.googleMapsUri === "string" && j.googleMapsUri
              ? j.googleMapsUri
              : google.url,
          };
        }
      }
    } catch (_) {
      /* keep fallback */
    }
  }

  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
  res.status(200).json({
    google,
    tabelog: {
      rating: Number.isFinite(tabelogRating) ? tabelogRating : 3.72,
      url: tabelogUrl,
    },
    updatedAt: Date.now(),
  });
};
