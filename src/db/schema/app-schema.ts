import { user } from "@/db/schema/auth-schema";
import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const comment = sqliteTable("comments", {
  id: int().primaryKey({ autoIncrement: true }),
  authorId: text("author_id")
    .references(() => user.id)
    .notNull(),
  content: text().notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const commentsRelations = relations(comment, ({ one }) => ({
  author: one(user, { fields: [comment.authorId], references: [user.id] }),
}));
