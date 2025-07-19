import { z } from "genkit";
import { MongoClient } from "mongodb";

// Define input schema for the database flow
const DbInputSchema = z.object({
  url: z.string().describe("MongoDB connection string"),
});

// Define the MongoDB flow
export const mongoDBFlow = (ai: any) =>
  ai.defineFlow(
    {
      name: "mongoDBFlow",
      inputSchema: DbInputSchema,
      outputSchema: z.any(),
    },
    async (input: any) => {
      const client = new MongoClient(input.url);

      try {
        await client.connect();
        // List all databases
        const databasesList = await client.db().admin().listDatabases();
        console.log("Databases:", databasesList.databases);
        return databasesList.databases;
      } finally {
        await client.close();
      }
    }
  );
