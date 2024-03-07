import { FC } from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={style.footer}>
      <footer>
        <div className={style.right}>
          <div className={style.gap}>
            {/* logo */}
            <Image
              src="/footerLogo.svg"
              width={230}
              height={51}
              alt="footer logo"
            />
            {/* logo */}

            <p>
              Vi arbejder for at informere om korrekt affaldssortering. Ved at
              sortere hjælper du os, men også klimaet.
            </p>
          </div>

          <p>©2023 Affaldsguiden.</p>
        </div>

        <Link href="#top" className={style.left}>
          Back to top
          {/* arrow icon */}
          <Image src="/arrow.svg" alt="Scroll up icon" height={35} width={35} />
          {/* arrow icon */}
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
