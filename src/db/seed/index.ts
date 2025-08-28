import { db } from "@/db";
import { user, account } from "@/db/schema/auth-schema";
import { comment } from "@/db/schema/app-schema";
import { auth } from "@/lib/auth";

async function seed() {
  console.log("🌱 Starting database seed...");

  try {
    // Clear existing data
    console.log("🧹 Clearing existing data...");
    await db.delete(comment);
    await db.delete(account);
    await db.delete(user);

    // Seed users using better-auth
    console.log("👥 Seeding users with better-auth...");

    const userData = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
        image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        password: "password123",
        image: undefined,
      },
    ];

    const createdUsers = [];

    for (const data of userData) {
      try {
        // Use better-auth's signUp method to create user and account
        const result = await auth.api.signUpEmail({
          body: {
            email: data.email,
            password: data.password,
            name: data.name,
            image: data.image,
          },
        });

        if (result) {
          createdUsers.push(result);
          console.log(`✅ Created user: ${data.email}`);
        }
      } catch (error) {
        console.error(`❌ Error creating user ${data.email}:`, error);
      }
    }

    console.log(`✅ Created ${createdUsers.length} users with accounts`);

    // Get the created user IDs for comments
    const dbUsers = await db.select().from(user);

    // Seed comments
    console.log("💬 Seeding comments...");
    const comments = await db
      .insert(comment)
      .values([
        {
          authorId: dbUsers[0].id,
          content:
            "This is my first comment! Really excited about this project.",
          createdAt: new Date(Date.now() - 86400000), // 1 day ago
        },
        {
          authorId: dbUsers[1].id,
          content:
            "Great work everyone! Looking forward to collaborating more.",
          createdAt: new Date(Date.now() - 43200000), // 12 hours ago
        },
        {
          authorId: dbUsers[0].id,
          content: "Thanks Jane! Let's keep building amazing things together.",
          createdAt: new Date(Date.now() - 21600000), // 6 hours ago
        },
        {
          authorId: dbUsers[2].id,
          content: "Just joined the discussion. This looks really promising!",
          createdAt: new Date(Date.now() - 10800000), // 3 hours ago
        },
        {
          authorId: dbUsers[1].id,
          content:
            "Welcome Bob! Feel free to ask any questions you might have.",
          createdAt: new Date(Date.now() - 3600000), // 1 hour ago
        },
      ])
      .returning();

    console.log(`✅ Created ${comments.length} comments`);

    console.log("🎉 Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log("✨ Seed completed");
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Seed failed:", error);
      process.exit(1);
    });
}

export { seed };
