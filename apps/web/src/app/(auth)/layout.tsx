"use client";
import { useAuth } from "@/store/useAuth";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  const user = useAuth()?.user;

  if (user) {
    redirect("/");
  }
  return <>{children}</>;
};

export default layout;
