"use client";
import Link from "next/link";
import { FC } from "react";
import style from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: {
    title: string;
    href: string;
  };
}

const NavLink: FC<NavLinkProps> = ({ link }) => {
  const currentPath = usePathname();

  return (
    <li
      className={`${style.link} ${currentPath === link.href ? style.active : ""}`}
    >
      <Link href={link.href}>{link.title}</Link>
    </li>
  );
};

export default NavLink;
