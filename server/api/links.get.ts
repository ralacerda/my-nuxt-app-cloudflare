import { createClient } from "@libsql/client";

export default lazyEventHandler(async () => {
  const { libsqlAuthToken, libsqlUrl } = useRuntimeConfig();
  const client = createClient({
    url: libsqlUrl,
    authToken: libsqlAuthToken,
  });

  return eventHandler(async () => {
    const result = await client.execute("SELECT * FROM link");
    return result.rows;
  });
});
