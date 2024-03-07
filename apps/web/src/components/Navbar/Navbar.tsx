import { navLinks } from "@/constants";
import Link from "next/link";
import { FC, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import style from "./Navbar.module.scss";
import Image from "next/image";
import Burgermenu from "./Burgermenu";
import { IoIosUnlock } from "react-icons/io";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import AuthButton from "./AuthButton";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <div className={style.top} id="top" />
      <div className={style.navbar}>
        <nav>
          <Link href={"/"}>
            <Image
              height={41}
              width={27.79}
              src={"/logo.svg"}
              alt="Affaldsguiden logo"
            />
          </Link>

          <ul className={style.desktopUi}>
            {navLinks.map((link, index) => (
              <NavLink link={link} key={index + link.title} />
            ))}
          </ul>

          <div className={style.icons}>
            <AuthButton />
            <Burgermenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
