import { Comments } from "@/lib/actions";

type CommentsListProps = React.ComponentPropsWithRef<"div"> & {
  comments: Comments;
};

export function CommentList({ comments, ...rest }: CommentsListProps) {
  return (
    <div
      {...rest}
      className="space-y-4 my-4 border rounded-md p-4 overflow-y-scroll"
    >
      {comments.map((comment) => (
        <div key={comment.id} className="border-b last:border-0 py-4">
          <div className="space-x-2 mb-2">
            <div className="font-semibold">{comment.author.name}</div>
            <div className="text-xs text-gray-500">
              {comment.createdAt.toLocaleString()}
            </div>
          </div>
          <div className="text-sm text-gray-500">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}
