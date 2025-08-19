import Link from "next/link";
import React from "react";

export default function AuthPageHeader({
  title = "Comments",
  subtitle,
}: {
  title?: string;
  subtitle: "Sign in" | "Sign up" | "Password Reset";
}) {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-8 text-4xl font-bold">
        <Link href="/">{title}</Link>
      </h1>
      <h2 className="text-2xl">{subtitle}</h2>
    </div>
  );
}
