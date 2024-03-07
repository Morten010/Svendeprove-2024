"use client";
import Link from "next/link";
import { FC } from "react";
import { IoIosUnlock } from "react-icons/io";
import style from "./Navbar.module.scss";
import { useAuth } from "@/store/useAuth";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

interface AuthButtonProps {}

const AuthButton: FC<AuthButtonProps> = ({}) => {
  const state = useAuth();

  if (state?.user) {
    return (
      <button className={style.login} onClick={() => state.logout()}>
        <BiLogOutCircle />
      </button>
    );
  }

  return (
    <Link href="/login" className={style.login} aria-label="Login">
      <IoIosUnlock />
    </Link>
  );
};

export default AuthButton;
