import { Button } from "@/components/tw/Button";
import { Dispatch, FC, SetStateAction } from "react";
import { UserChoicesProps } from "./page";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface StepTwoProps {
  userChoices: UserChoicesProps;
  setUserChoices: Dispatch<SetStateAction<UserChoicesProps>>;
}

type Inputs = {
  fullname: string;
  email: string;
  phone: string;
  address: string;
};

const StepTwo: FC<StepTwoProps> = ({ setUserChoices, userChoices }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const submit = async (data: Inputs) => {
    const containers = [];

    for (const container of userChoices.type) {
      if (container.checked) {
        containers.push({
          ...data,
          zipcode: 6000,
          city: "aalborg",
          container_id: container.id,
        });
      }
    }

    const postOrders = containers.map(async (container) => {
      return axios.post("http://localhost:4000/orders", container);
    });

    const fetches = await Promise.allSettled(postOrders);

    let errors = false;
    for (const f of fetches) {
      if (f.status === "rejected") {
        errors = true;
        toast.error("Noget gik galt prøv igen");
      }
    }
    if (!errors) {
      toast.success("Din ordre er modaget nu");
    }
  };

  return (
    <>
      <span>Trin 2</span>
      <h1 className="my-2">Hvor skal den leveres?</h1>
      <p>
        Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
        concludaturque usu, facete detracto patrioque an per, lucilius
        pertinacia eu vel.
      </p>
      <form
        className="flex flex-col gap-2 my-4"
        onSubmit={handleSubmit(submit)}
      >
        <label>
          <span className="sr-only">Navn</span>
          <input
            className={cn("bg-white border border-[#D8EADB] px-5 py-3 w-full", {
              "border-red-600 focus:outline-red-600": errors.fullname?.message,
            })}
            placeholder="Navn"
            {...register("fullname", {
              required: "required",
            })}
          />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input
            className={cn("bg-white border border-[#D8EADB] px-5 py-3 w-full", {
              "border-red-600 focus:outline-red-600": errors.email?.message,
            })}
            placeholder="Email"
            {...register("email", {
              required: "required",
            })}
          />
        </label>
        <label>
          <span className="sr-only">Telefon</span>
          <input
            className={cn("bg-white border border-[#D8EADB] px-5 py-3 w-full", {
              "border-red-600 focus:outline-red-600": errors.email?.message,
            })}
            placeholder="Telefon"
            type="number"
            {...register("phone", {
              required: "required",
            })}
          />
        </label>
        <label>
          <span className="sr-only">Addresse</span>
          <input
            className={cn("bg-white border border-[#D8EADB] px-5 py-3 w-full", {
              "border-red-600 focus:outline-red-600": errors.address?.message,
            })}
            placeholder="Addresse"
            {...register("address", {
              required: "required",
            })}
          />
        </label>
        <Button
          variant="secondary"
          className="ml-auto min-w-[210px] my-2"
          type="submit"
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default StepTwo;
