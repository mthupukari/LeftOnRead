// This file will contain the Drizzle ORM schema definitions

import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

// Example schema for messages - to be implemented later
export const messages = sqliteTable("messages", {
  id: text("id").primaryKey(),
  sender: text("sender").notNull(),
  timestamp: integer("timestamp", { mode: "timestamp" }).notNull(),
  preview: text("preview").notNull(),
  content: text("content").notNull(),
  read: integer("read", { mode: "boolean" }).notNull().default(false),
  userId: text("user_id").notNull(),
})

// Example schema for users - to be implemented later
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(Date.now()),
})

// Example schema for message replies - to be implemented later
export const replies = sqliteTable("replies", {
  id: text("id").primaryKey(),
  messageId: text("message_id")
    .notNull()
    .references(() => messages.id),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(Date.now()),
  sent: integer("sent", { mode: "boolean" }).notNull().default(false),
})
