import AuthFormContainer from "@/app/auth/components/auth-form-container";
import AuthPageHeader from "@/app/auth/components/auth-page-header";
import { SignInForm } from "@/app/auth/components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <AuthPageHeader subtitle="Sign in" />
      <AuthFormContainer>
        <SignInForm />
      </AuthFormContainer>
    </div>
  );
}
