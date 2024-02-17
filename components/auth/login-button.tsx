"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    console.log("login clicked");
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: implement modal</span>;
  }

  return (
    <span onClick={onClick} className={"cursor-pointer"}>
      {children}
    </span>
  );
};
