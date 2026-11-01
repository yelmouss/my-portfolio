import { Featurable } from "featurable";

const NO_STORE_HEADERS = { "Cache-Control": "no-store, max-age=0" };
const SUPPORTED_LOCALES = new Set(["fr", "en", "ar"]);

function isSameOriginRequest(request) {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");

  if (fetchSite && fetchSite !== "same-origin") return false;
  if (!origin) return fetchSite === "same-origin";

  try {
    return new URL(origin).origin === request.nextUrl.origin;
  } catch {
    return false;
  }
}

export const dynamic = "force-dynamic";

export async function GET(request) {
  if (!isSameOriginRequest(request)) {
    return Response.json(
      { error: "This endpoint only accepts same-origin requests." },
      { status: 403, headers: NO_STORE_HEADERS },
    );
  }

  const apiKey = process.env.FEATURABLE_API_KEY;
  const widgetId = process.env.FEATURABLE_WIDGET_ID;
  if (!apiKey || !widgetId) {
    console.error("Google reviews require FEATURABLE_API_KEY and FEATURABLE_WIDGET_ID.");
    return Response.json(
      { error: "Google reviews are not configured." },
      { status: 503, headers: NO_STORE_HEADERS },
    );
  }

  const locale = request.nextUrl.searchParams.get("locale");
  if (!SUPPORTED_LOCALES.has(locale)) {
    return Response.json(
      { error: "A supported locale is required." },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const placeId = process.env.GOOGLE_PLACE_ID;
  let widget;
  try {
    const client = new Featurable({
      apiKey,
      timeout: 8000,
      maxRetries: 0,
      fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
    });
    widget = await client.widgets.retrieve(widgetId, {
      timeout: 8000,
      maxRetries: 0,
    });
  } catch (error) {
    console.error("Featurable API request failed.", {
      errorName: error.name,
      status: error.status,
    });
    return Response.json(
      { error: "Google reviews could not be loaded." },
      { status: 502, headers: NO_STORE_HEADERS },
    );
  }

  // Example reviews are placeholders from Featurable, never show them as real ones.
  const googleReviews = widget.isExampleReviews
    ? []
    : widget.reviews.filter((review) => ["google", "gbp"].includes(review.platform));
  if (googleReviews.some((review) => !review.author?.name)) {
    console.error("Featurable returned a Google review without author attribution.");
    return Response.json(
      { error: "Google reviews could not be loaded." },
      { status: 502, headers: NO_STORE_HEADERS },
    );
  }

  const reviews = googleReviews.map((review) => {
    const author = review.author;
    return {
      reviewId: review.id,
      reviewer: {
        displayName: author.name,
        profilePhotoUrl: author.avatarUrl || "",
        isAnonymous: false,
        uri: author.profileUrl || null,
      },
      starRating: review.rating.value,
      comment: review.text || review.originalText || "",
      createTime: review.publishedAt || null,
      updateTime: review.updatedAt || null,
    };
  });

  const summary = widget.gbpLocationSummary;
  const average = reviews.length
    ? reviews.reduce((sum, review) => sum + review.starRating, 0) / reviews.length
    : null;

  return Response.json(
    {
      rating: summary?.rating ?? average,
      totalReviewCount: summary?.reviewsCount ?? reviews.length,
      googleMapsUri:
        summary?.writeAReviewUri ||
        (placeId
          ? `https://www.google.com/maps/search/?api=1&query_place_id=${encodeURIComponent(placeId)}`
          : null),
      reviews,
    },
    { headers: NO_STORE_HEADERS },
  );
}
