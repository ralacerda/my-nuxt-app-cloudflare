import { createClient } from "@libsql/client";

export default eventHandler(async (event) => {
  const { libsqlAuthToken, libsqlUrl } = useRuntimeConfig(event);
  const client = createClient({
    url: libsqlUrl,
    authToken: libsqlAuthToken,
  });

  const result = await client.execute("SELECT * FROM link");
  return result.rows;
});
