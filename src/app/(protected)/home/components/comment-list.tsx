"use client";

import type { Comments } from "@/lib/actions";
import { useEffect, useRef } from "react";

type CommentsListProps = React.ComponentPropsWithRef<"div"> & {
  comments: Comments;
};

export function CommentList({ comments, className }: CommentsListProps) {
  const lastCommentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastCommentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  return (
    <div
      className={`space-y-4 border rounded-md p-4 overflow-y-scroll ${className}`}
    >
      {comments.map((comment, index) => (
        <div
          key={comment.id}
          className="border-b last:border-0 py-4"
          ref={index === comments.length - 1 ? lastCommentRef : null}
        >
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
