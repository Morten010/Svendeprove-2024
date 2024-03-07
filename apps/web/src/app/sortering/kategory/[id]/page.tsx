import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = ({ params: { id } }) => {
  return <p>Kategory: {id}</p>;
};

export default page;
