function prepare(ctx, manifest) {
  const cookies = ctx.cookies;
  alert(cookies)
  try {
    // Auth Token
    manifest.request.set("authToken", cookies);
    return (
      !!manifest.request.getHeader("cookie")
    );
  } catch (e) {
    console.error("Error in getBody:", e);
    alert(e);
    return false;
  }
}
