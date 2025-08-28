import { user } from "@/db/schema/auth-schema";
import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const comment = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  authorId: text("author_id")
    .references(() => user.id)
    .notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const commentsRelations = relations(comment, ({ one }) => ({
  author: one(user, { fields: [comment.authorId], references: [user.id] }),
}));
