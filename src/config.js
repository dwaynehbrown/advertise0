import configJson from "./auth_config.json";

export function getConfig() {
  // Configure the audience here. By default, it will take whatever is in the config
  // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
  // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
  // don't have an API).
  // If this resolves to `null`, the API page changes to show some helpful info about what to do
  // with the audience.
  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    appOrigin: configJson.appOrigin,
    apiOrigin: `${configJson.appOrigin}:3001`,
    //apiOrigin: "https://local.a0.gg:3001",
    ...(audience ? { audience } : null),
  };
}
