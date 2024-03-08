import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { UserChoicesProps } from "./page";
import { Button } from "@/components/tw/Button";
import { toast } from "sonner";

interface StepOneProps {
  userChoices: UserChoicesProps;
  setUserChoices: Dispatch<SetStateAction<UserChoicesProps>>;
}

const StepOne: FC<StepOneProps> = ({ setUserChoices, userChoices }) => {
  const handleNext = () => {
    let checked = 0;
    for (const choice of userChoices.type) {
      if (choice.checked) {
        checked += 1;
      }
    }

    if (!checked) return toast.error("Vælg mindst en type.");
    setUserChoices({
      ...userChoices,
      step: userChoices.step + 1,
    });
  };

  return (
    <>
      <span>Trin 1</span>
      <h1 className="my-2">Vælg type</h1>
      <p>
        Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
        concludaturque usu, facete detracto patrioque an per, lucilius
        pertinacia eu vel.
      </p>
      <div>
        <div className="grid place-content-center py-4">
          <div className="grid grid-cols-2 text-center gap-2">
            {userChoices.type.map((t) => (
              <div
                className="flex items-center justify-center flex-col bg-white py-5 px-10 relative cursor-pointer"
                onClick={() =>
                  setUserChoices({
                    ...userChoices,
                    type: userChoices.type.map((userType) => {
                      if (userType.name === t.name) {
                        return {
                          ...t,
                          checked: !t.checked,
                        };
                      } else {
                        return userType;
                      }
                    }),
                  })
                }
              >
                <div
                  className={cn(
                    "absolute top-2 right-2 h-3 aspect-square border border-[#E1E1E1] rounded-full bg-[#F9F9F9] box",
                  )}
                >
                  {t.checked && (
                    <div className="bg-primary rounded-full h-2 aspect-square absolute top-2/4 left-2/4 -translate-x-[calc(50%)] -translate-y-[calc(50%)]" />
                  )}
                </div>
                <Image
                  src={`/Images/Icons/${t.icon_filename}`}
                  width={80}
                  height={80}
                  alt={t.name}
                  className="w-[80px] aspect-square mx-auto"
                />
                <h2>{t.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="secondary"
          className="ml-auto min-w-[210px] my-2"
          onClick={handleNext}
        >
          Videre
        </Button>
      </div>
    </>
  );
};

export default StepOne;
