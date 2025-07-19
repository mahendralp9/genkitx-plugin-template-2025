import { z } from "genkit";
import { Client } from "pg";

// Define input schema for the database flow
const DbInputSchema = z.object({
  user: z.string(),
  host: z.string(),
  database: z.string(),
  password: z.string(),
  port: z.number(),
});

// Define the PostgreSQL flow
export const postgresFlow = (ai: any) =>
  ai.defineFlow(
    {
      name: "postgresFlow",
      inputSchema: DbInputSchema,
      outputSchema: z.any(),
    },
    async (input: any) => {
      const client = new Client({
        user: input.user,
        host: input.host,
        database: input.database,
        password: input.password,
        port: input.port,
      });

      try {
        await client.connect();
        const res = await client.query(
          "SELECT title, description, region from news_articles LIMIT 5;"
        );
        return res.rows;
      } finally {
        await client.end();
      }
    }
  );
