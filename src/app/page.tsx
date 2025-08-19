import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Comments</h1>
        <p className="text-gray-600">Post your thoughts here</p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/auth/sign-up">Sign up</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/sign-in">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
