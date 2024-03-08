"use client";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import StepOne from "./StepOne";
import StepSvg from "./StepSvg";
import StepTwo from "./StepTwo";
import Spinner from "@/components/details/Spinner";

interface pageProps {}

export type UserChoicesProps = {
  step: number;
  type: typeProps[];
};
type typeProps = {
  id: number;
  name: string;
  icon_filename: string;
  checked: boolean;
};

const page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userChoices, setUserChoices] = useState<UserChoicesProps>({
    step: 1,
    type: [],
  });

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/containers");

        setUserChoices({
          ...userChoices,
          type: data.map((type: typeProps) => ({ ...type, checked: false })),
        });
      } catch (_err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchContainers();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-100px)] w-full grid place-content-center">
        <Spinner className="h-10 w-10 text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[calc(100vh-100px)] w-full grid place-content-center text-center">
        <h1 className="text-3xl text-primary font-bold">ohh ohhh</h1>
        <p className="text-black/60">
          Kunne ikke få fat i databasen lige nu prøv igen senere
        </p>
      </div>
    );
  }

  return (
    <main className="flex p-5 h-[calc(100vh-100px)] justify-center items-center max-w-screen-lg mx-auto">
      <div className="bg-[#DCDCDC] flex w-full">
        <div className="bg-primary w-[40%] flex justify-end p-3">
          <StepSvg isStepTwo={userChoices.step === 1} />
        </div>

        <div className="w-[60%] p-5">
          {userChoices.step === 1 && (
            <StepOne
              setUserChoices={setUserChoices}
              userChoices={userChoices}
            />
          )}
          {userChoices.step === 2 && (
            <StepTwo
              setUserChoices={setUserChoices}
              userChoices={userChoices}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
