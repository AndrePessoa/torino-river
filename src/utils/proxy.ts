import fetch from "node-fetch";

export default async function loadProxy(event: any) {
  const queryParams = event.queryStringParameters;
  const { url } = queryParams;

  if (!url || typeof url !== "string") {
    throw new Error("No URL");
  }

  const validUrlRegex = /.*/; // Add your regex if needed
  if (!validUrlRegex.test(url)) {
    throw new Error("Invalid URL");
  }

  let options: any = {
    method: event.httpMethod.toUpperCase(),
    headers: {
      "User-Agent": queryParams.user_agent || event.headers["user-agent"],
    },
  };

  if (options.method === "POST") {
    options = {
      ...options,
      body: JSON.stringify(event.body),
    };
  }

  if (queryParams.send_cookies && options.headers) {
    options.headers = {
      ...options.headers,
      Cookie: event.headers["cookie"],
    };
  }

  try {
    const response = await fetch(url, options);
    const headers = response.headers;
    let contents = await response.text();

    // Transform relative URLs to absolute
    const domain = new URL(url).origin;
    contents = contents.replace(
      /href="(?!https?:\/\/)(?!data:)(?!#)/g,
      `href="${domain}`
    );
    contents = contents.replace(
      /src="(?!https?:\/\/)(?!data:)(?!#)/g,
      `src="${domain}`
    );

    const result = {
      headers: queryParams.full_headers ? headers : undefined,
      status: queryParams.full_status ? await response.status : undefined,
      contents: contents,
    };

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "ERROR: " + error.message }),
    };
  }
}
