"use client";
import { cn } from "@/lib/utils";
import { CategoryProps, ResponseProps, SektionProp, TypesProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useQuery } from "react-query";
import { toast } from "sonner";
import CategoryCard from "./CategoryCard";
import CategoryGrid from "./CategoryGrid";
import Spinner from "@/components/details/Spinner";
import { error, log } from "console";

interface pageProps {}

// http://localhost:3000/search/papir

const page: FC<pageProps> = ({}) => {
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const [sektions, setSektions] = useState<SektionProp[]>([]);
  const [data, setData] = useState<{
    categories: CategoryProps[];
    types: TypesProps[];
    search: string;
  }>({
    search: "",
    categories: [],
    types: [],
  });

  const {
    data: affald,
    refetch,
    isFetching,
    isError,
  } = useQuery({
    queryFn: async () => {
      if (!search) {
        toast.error("Mangler søgeord");
        return undefined;
      }
      const url = `http://localhost:4000/search/${search}`;

      const { data } = await axios.get(url);

      return data as ResponseProps;
    },
    onSuccess: (data) => {
      if (!data) return;
      setData({
        // @ts-ignore
        types: data.data.filter((item) => item.type === "type"),
        // @ts-ignore
        categories: data.data.filter((item) => item.type === "category"),
        search: search,
      });
      setSearch("");
    },
    onError: () => {
      toast.error(
        "Kunne ikke få fat i dataen, prøv igen eller kom igen senere.",
      );
    },
    queryKey: "getGuide",
    enabled: false,
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data: sektion } = await axios.get(
          "http://localhost:4000/section?incl_categories=true&incl_types=true",
        );
        
          
        setSektions(sektion);
      } catch (err) {
        setFetchError(true);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="relative max-w-screen-lg mx-auto">
      <h1 className="text-center text-[#0E4F2D] font-bold text-3xl pt-20">
        <span className="text-[#119B1E]">Din guide</span> <br />
        til en sund affaldssortering
      </h1>
      {/* search bar */}
      <form
        className="flex justify-center mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          if (!fetchError) {
            refetch();
          }
        }}
      >
        <label>
          <span className="sr-only">Søg på affald</span>
          <div
            className={cn(
              "relative mx-auto",
              {
                "opacity-60 pointer-events-none": isFetching,
              },
              {
                "opacity-60 pointer-events-none": fetchError,
              },
            )}
          >
            <input
              disabled={isFetching || fetchError}
              name="q"
              id="q"
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              placeholder="Søg på affald"
              className="p-3 px-4 rounded-full w-[500px] shadow-[0px_5px_10px_#0000004A] disabled:bg-white"
            />
            <div className="absolute right-4 top-[50%] -translate-y-2/4 text-xl ">
              {!isFetching ? (
                <button
                  aria-label="Søg"
                  type="submit"
                  className="grid place-content-center"
                >
                  <IoSearch />
                </button>
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </label>
      </form>
      {/* search bar */}

      {/* start categories */}
      {data.search.length === 0 && (
        <CategoryGrid>
          {sektions.map((sektion) => (
            <CategoryCard
              urlRoute={`/sortering/sektion/${sektion.id}`}
              category={{
                icon_filename: sektion.filename,
                icon_filepath: sektion.filepath,
                id: sektion.id,
                title: sektion.title,
                type: "category",
              }}
              color={sektion.color}
            />
          ))}
        </CategoryGrid>
      )}
      {/* start categories */}

      {/* search */}
      {data.search.length !== 0 && (
        <div className="my-10 px-4">
          <p className="mb-2 text-black/60">
            Du søgte efter "{data.search}" vi fandt {data.categories.length}{" "}
            kategorier og {data.types.length} typer
          </p>
          <CategoryGrid className="mt-2 px-0">
            {data.categories.map((item) => (
              <CategoryCard
                urlRoute="kategori"
                category={item}
                color={getColor(item, sektions)}
              />
            ))}
          </CategoryGrid>

          <div className="flex flex-wrap gap-2">
            {data.types.map((item) => (
              <Link
                className="p-2 border-2 box-border"
                // href={`/sortering/type/${item.id}`}
                href={getTypesUrl(item, sektions)}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* loading spinner */}
      {sektions.length === 0 && !fetchError && (
        <div className="h-[40vh] grid place-content-center">
          <Spinner className="h-10 w-10 animate-spin" />
        </div>
      )}
      {/* loading spinner */}

      {fetchError && (
        <div className="grid place-content-center text-center">
          <h2 className="text-2xl font-bold text-[#119B1E]">
            Kunne ikke få fat i databasen.
          </h2>
          <p className="text-primary/60 mb-4">
            Prøv refresh siden ellers kom igen senere.
          </p>
          <Image alt="Error" src="/error.svg" width={300} height={400} />
        </div>
      )}
    </div>
  );
};

function getColor(category: CategoryProps, sektions: SektionProp[]) {
  let color = "";
  for (const sek of sektions) {
    for (const cat of sek.categories) {
      if (cat.title === category.title) {
        color = sek.color;
      }
    }
  }
  return color;
}

function getTypesUrl(type: TypesProps, sektions: SektionProp[]){
  for(const sektion of sektions){
    for(const category of sektion.categories){
      if(category.types){
        for(const t of category.types){
          if(type.id == t.id){
            return `/sortering/sektion/${sektion.id}?category=${category.title}&type=${type.id}`
          }
        }
      }
    }
  }
  return "sektion"
}

export default page;
