import { Button, buttonVariants } from "@/components/tw/Button";
import Slideshow from "@/components/tw/Slideshow";
import DefaultWave from "@/components/tw/waves/DefaultWave";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* hero image */}
      <Slideshow />
      {/* hero image */}

      {/* cta */}
      <div className="px-5">
        <div className="bg-secondary max-w-[789px] w-full mx-auto rounded-2xl p-10 -translate-y-[50%]">
          <h1 className="text-3xl sm:text-4xl text-center mb-10">
            Find og anmeld genbrugsstationer
          </h1>
          <div className="flex gap-4 justify-center">
            <Link
              href="/genbrugstationer"
              className={cn(buttonVariants({ size: "lg" }), "w-[172.82px]")}
            >
              Find station
            </Link>
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "lg" }), "w-[172.82px]")}
            >
              Log ind
            </Link>
          </div>
        </div>
      </div>
      {/* cta */}

      {/* info */}
      <div className="max-w-[1400px] mx-auto px-5">
        <article className="flex items-center gap-20 flex-col md:flex-row">
          <div className="w-full md:max-w-[50%]">
            <h2 className="text-4xl sm:text-7xl font-bold">
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">Din </span>
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">
                guide{" "}
              </span>
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">til </span>
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">
                sortering
              </span>
            </h2>
            <p className="text-xl my-10">
              Her kan du se hvordan du skal sortere og hvad der skal i hvilke
              beholdere. Du får også tips og tricks til, hvordan du gør det nemt
              at sortere hjemme hos dig.
            </p>
            <div className="flex gap-5">
              <Link
                href="/sortering"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Se affaldsguide
              </Link>
              <Link
                href="/bestil"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                )}
              >
                Bestil storskrald
              </Link>
            </div>
          </div>
          <div className="md:max-w-[612px] w-full md:w-2/4 aspect-square md:aspect-[612/707] relative">
            <Image
              src="/trash.webp"
              alt="Skrald"
              fill
              className="object-cover rounded-3xl md:rounded-none md:object-none"
            />
          </div>
        </article>

        <article className="flex items-center gap-20 flex-col md:flex-row-reverse mt-20 sm:mt-0">
          <div className="w-full md:max-w-[50%]">
            <h2 className="text-4xl sm:text-7xl font-bold">
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">
                Bestil{" "}
              </span>
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">din </span>
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">nye </span>
              <span className="shadow-[inset_0_-0.5em_0_0_#D8EADB]">
                affaldsbeholder{" "}
              </span>
            </h2>
            <p className="text-xl my-10">
              when an unknown printer took a galley of type and scramble it to
              make a type specimen book. It has survived not only
            </p>
            <div className="flex gap-5">
              <Link href="/bestil" className={cn(buttonVariants({ size: "lg" }))}>
                Bestil nu
              </Link>
            </div>
          </div>
          <div className="md:max-w-[612px] w-full md:w-2/4 aspect-square md:aspect-[612/707] relative">
            <Image
              src="/bins.webp"
              alt="Skrald"
              fill
              className="object-cover rounded-3xl md:rounded-none md:object-none"
            />
          </div>
        </article>
      </div>
      {/* info */}

      {/* bottom wave */}
      <DefaultWave />
      {/* bottom wave */}
    </main>
  );
}
