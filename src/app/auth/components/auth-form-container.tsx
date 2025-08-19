import React from "react";

function AuthFormContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-lg min-w-xs p-4 border rounded-2xl">{children}</div>
  );
}

export default AuthFormContainer;
