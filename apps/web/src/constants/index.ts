type NavLink = {
  title: string;
  href: string;
};

export const navLinks: NavLink[] = [
  {
    title: "Forside",
    href: "/",
  },
  {
    title: "Sortering",
    href: "/sortering",
  },
  {
    title: "Genbrugsstationer",
    href: "/genbrugstationer",
  },
  {
    title: "Bestil beholder",
    href: "/bestil",
  },
];

type SlideProps = {
  alt: string;
  href: string;
};

export const slides: SlideProps[] = [
  {
    href: "/Slideshow/affald-skov-1.webp",
    alt: "Affald skov",
  },
  {
    href: "/Slideshow/affald-strand-2.webp",
    alt: "Affald strand",
  },
  {
    href: "/Slideshow/malerspande.webp",
    alt: "Affald skov",
  },
];
