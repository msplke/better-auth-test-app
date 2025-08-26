"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { comment } from "@/db/schema/app-schema";
import { revalidatePath } from "next/cache";

async function getUserFromCurrentSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Not authenticated");
  }

  return session.user;
}

export async function createComment(content: string) {
  const currentUser = await getUserFromCurrentSession();

  try {
    await db.insert(comment).values({ authorId: currentUser.id, content });
    revalidatePath("/home");
  } catch (e) {
    console.error(e);
    throw new Error("Database Error.");
  }
}

export async function getComments() {
  await getUserFromCurrentSession();

  try {
    return await db.query.comment.findMany({
      columns: {
        authorId: false,
      },
      with: {
        author: {
          columns: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("Database Error.");
  }
}

export type Comments = Awaited<ReturnType<typeof getComments>>;
