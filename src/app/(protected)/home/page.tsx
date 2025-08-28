import { CommentForm } from "@/app/(protected)/home/components/comment-form";
import { CommentList } from "@/app/(protected)/home/components/comment-list";
import { createComment, getComments } from "@/lib/actions";

export default async function Home() {
  const comments = await getComments();
  return (
    <div className="flex flex-col h-screen p-8">
      <CommentList comments={comments} className="flex-1 mb-4" />
      <CommentForm
        createComment={createComment}
        className="flex flex-wrap items-center justify-end md:justify-normal gap-4"
      />
    </div>
  );
}
