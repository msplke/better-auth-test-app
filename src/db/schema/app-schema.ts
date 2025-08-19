import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const comments = sqliteTable("comments", {
  id: int().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
});
