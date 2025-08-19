import { SignUpForm } from "@/app/auth/components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="my-8 text-2xl font-bold">Sign Up</h1>
      <div className="max-w-md min-w-[320px] mx-auto border rounded-2xl p-4">
        <SignUpForm />
      </div>
    </div>
  );
}
