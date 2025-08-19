import { CommentForm } from "@/app/home/components/comment-form";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="w-full max-w-md mx-auto border rounded-2xl p-4">
        <CommentForm />
      </div>
    </div>
  );
}
