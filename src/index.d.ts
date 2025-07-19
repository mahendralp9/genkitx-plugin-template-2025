import { z } from "genkit";
export declare const postgresFlow: import("genkit").Action<z.ZodObject<{
    user: z.ZodString;
    host: z.ZodString;
    database: z.ZodString;
    password: z.ZodString;
    port: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}, {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}>, z.ZodAny, z.ZodTypeAny>;
