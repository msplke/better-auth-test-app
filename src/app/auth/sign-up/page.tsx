import AuthFormContainer from "@/app/auth/components/auth-form-container";
import AuthPageHeader from "@/app/auth/components/auth-page-header";
import { SignUpForm } from "@/app/auth/components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <AuthPageHeader subtitle="Sign up" />
      <AuthFormContainer>
        <SignUpForm />
      </AuthFormContainer>
    </div>
  );
}
