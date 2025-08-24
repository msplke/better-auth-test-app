import { drizzle } from "drizzle-orm/libsql";
import { env } from "@/env";
import { schema } from "@/db/schema";

export const db = drizzle(env.DB_FILE_NAME, { schema });
