import { SignInForm } from "@/app/auth/components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="my-8 text-2xl font-bold">Sign In</h1>
      <div className="max-w-md min-w-[320px] mx-auto border rounded-2xl p-4">
        <SignInForm />
      </div>
    </div>
  );
}
