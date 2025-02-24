function prepare(ctx, manifest) {
  const cookies = ctx.cookies;
  try {
    // Auth Token
    manifest.request.set("authToken", cookies);
    return (
      !manifest.request.get("body").variables.name.includes("<%") &&
      !!manifest.request.getHeader("cookie")
    );
  } catch (e) {
    console.error("Error in getBody:", e);
    return false;
  }
}
