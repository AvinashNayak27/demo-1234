function prepare(ctx, manifest) {
  const document = ctx.doc;
  const cookies = document.cookie;

  try {
    // Auth Token
    manifest.request.set("authToken", cookies);
    return (
      !!manifest.request.getHeader("cookie")
    );
  } catch (e) {
    console.error("Error in getBody:", e);
    return false;
  }
}
