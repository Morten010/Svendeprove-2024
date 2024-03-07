"use client";
import { Button, buttonVariants } from "@/components/tw/Button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/store/useAuth";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsEye, BsEyeFill } from "react-icons/bs";
import { useMutation } from "react-query";
import { toast } from "sonner";

interface LoginProps {}

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const Login: FC<LoginProps> = ({}) => {
  const [hide, setHide] = useState(true);
  const state = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate: login } = useMutation({
    mutationFn: async (user: Inputs) => {
      const { data } = await axios.post("http://localhost:4000/users", {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        is_active: 1,
        org_id: 1,
        refresh_token: 1234,
        groups: 2,
      });

      return data;
    },
    onSuccess: (data) => {
      toast.success("Bruger oprettet, nu kan du logge ind.");
    },
    onError: (err: AxiosError) => {
      // @ts-ignore
      toast.error(err.response?.data.message);
    },
    mutationKey: ["login"],
  });

  const handleLogin: SubmitHandler<Inputs> = (user) => {
    login(user);
  };
  return (
    <div className="max-w-screen-lg mx-auto h-[calc(100vh-100px)] grid grid-cols-2 p-5 relative">
      <Link
        href="/login"
        className={cn(
          buttonVariants({
            variant: "secondary",
          }),
          "absolute right-5 top-5",
        )}
      >
        Log in
      </Link>
      <div className="grid place-content-center gap-5 h-full w-full p-10">
        <h2 className="flex text-xl font-bold items-center gap-5 mx-auto justify-center">
          <Image
            height={41}
            width={27.79}
            src={"/logo.svg"}
            alt="Affaldsguiden logo"
          />
          Affaldsguiden
        </h2>
        <p className="text-2xl max-w-[350px] text-center">
          Tilmeld dig på Affaldsguiden for at anmelde stationer
        </p>
      </div>

      <div className="h-full w-full flex items-center">
        <div className="bg-white w-full p-10 rounded-3xl">
          <h1 className="text-4xl font-bold">Tilmeld dig</h1>
          <form
            className="flex flex-col gap-3 mt-5"
            onSubmit={handleSubmit(handleLogin)}
          >
            <label>
              <span className="sr-only">Fornavn</span>
              <input
                placeholder="Fornavn"
                className={cn(
                  "p-4 placeholder:text-[#84818A] border border-[#DCDBDD] rounded-2xl w-full",
                  {
                    "border-red-600 focus:outline-red-600 ": !!errors.email,
                  },
                )}
                {...register("firstname", {
                  required: "Krævet",
                  minLength: {
                    value: 2,
                    message: "Skal mindst være 2 bogstaver",
                  },
                })}
              />
              <p className="text-sm text-red-600">
                {errors.firstname?.message}
              </p>
            </label>
            <label>
              <span className="sr-only">Efternavn</span>
              <input
                placeholder="Efternavn"
                className={cn(
                  "p-4 placeholder:text-[#84818A] border border-[#DCDBDD] rounded-2xl w-full",
                  {
                    "border-red-600 focus:outline-red-600 ": !!errors.email,
                  },
                )}
                {...register("lastname", {
                  required: "Krævet",
                  minLength: {
                    value: 2,
                    message: "Skal mindst være 2 bogstaver",
                  },
                })}
              />
              <p className="text-sm text-red-600">{errors.lastname?.message}</p>
            </label>
            <label>
              <span className="sr-only">Fornavn</span>
              <input
                placeholder="E-mail"
                className={cn(
                  "p-4 placeholder:text-[#84818A] border border-[#DCDBDD] rounded-2xl w-full",
                  {
                    "border-red-600 focus:outline-red-600 ": !!errors.email,
                  },
                )}
                {...register("email", {
                  required: "Krævet",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "Den indtastede værdi matcher ikke e-mail-formatet",
                  },
                })}
              />
              <p className="text-sm text-red-600">{errors.email?.message}</p>
            </label>
            <label className="relative">
              <span className="sr-only">Password</span>
              <input
                placeholder="Password"
                type={hide ? "password" : "text"}
                className={cn(
                  "p-4 placeholder:text-[#84818A] border border-[#DCDBDD] rounded-2xl w-full",
                  {
                    "border-red-600 focus:outline-red-600": !!errors.password,
                  },
                )}
                {...register("password", {
                  required: "Krævet",
                  minLength: {
                    value: 5,
                    message: "Skal mindst være 5 karaktere lang",
                  },
                })}
              />
              <button
                className={cn(
                  "text-xl absolute right-4 top-2/4 -translate-y-2/4 z-10",
                )}
                onClick={() => {
                  setHide(!hide);
                }}
                type="button"
                aria-label="vis kodeord"
              >
                {hide && <BsEyeFill />}
                {!hide && <BsEye />}
              </button>
            </label>
            <p className="text-sm text-red-600">{errors.password?.message}</p>
            <Button className="mx-auto min-w-[164px]" type="submit">
              Tilmeld dig
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
