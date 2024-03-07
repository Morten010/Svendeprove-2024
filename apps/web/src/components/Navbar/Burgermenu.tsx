"use client";
import { navLinks } from "@/constants";
import { FC, useState } from "react";
import style from "./Navbar.module.scss";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

interface BurgermenuProps {}

const Burgermenu: FC<BurgermenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.burgerMenu}>
      <button onClick={() => setOpen(!open)} aria-label="burger menu">
        {!open && <IoMenu />}
        {open && <IoClose />}
      </button>
      {open && (
        <ul className={style.menu}>
          {navLinks.map((link, index) => (
            <li key={link.title + index} className={style.link}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Burgermenu;
