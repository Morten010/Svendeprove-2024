import axios from "axios";
import { FC } from "react";

interface GenbrugStationerProps {}

type PlaceProps = {
  id: number;
  name: string;
  address: string;
  zipcode: number;
  city: string;
};

const page: FC<GenbrugStationerProps> = async ({}) => {
  const { data } = await axios.get(
    "http://localhost:4000/orgs?attributes=id,name,address,zipcode,city",
  );

  // const url = getMap(6)
  return (
    <main className=" min-h-[calc(100vh-100px)] grid place-content-center">
      <div className="w-[80%] flex mx-auto flex-wrap gap-10">
        {data.map((place: PlaceProps) => (
          <div className="bg-white rounded-2xl overflow-hidden max-w-[352.28px] w-full shadow-[0px_3px_6px_#00000029]">
            <iframe
              src={getMap(place.id)}
              style={{
                border: 0,
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full aspect-video"
            />
            <div className="p-3">
              <h1 className="font-bold text-xl">{place.name}</h1>
              <p>Beskrivelse</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

function getMap(id: number) {
  switch (id) {
    case 1:
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.2129205856554!2d9.9674576!3d57.04789490000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b6a2b7696b%3A0x861634f2bf524040!2s%C3%98ster%20Uttrup%20Vej%201%2C%209000%20Aalborg!5e0!3m2!1sen!2sdk!4v1709572224352!5m2!1sen!2sdk";
    case 2:
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.955119853129!2d10.0304303!3d56.863864799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464eb5e46bb00931%3A0x19e4a39b73901dcc!2sM%C3%B8lholmvej%2020B%2C%209520%20Sk%C3%B8rping!5e0!3m2!1sen!2sdk!4v1709572470256!5m2!1sen!2sdk";
    case 3:
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.340409850898!2d9.754500399999998!3d56.874406099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46494993b7b6dba9%3A0x5e64d1e680d1be04!2sHjedsb%C3%A6kvej%20107%2C%209530%20St%C3%B8vring!5e0!3m2!1sen!2sdk!4v1709572663501!5m2!1sen!2sdk";
    case 4:
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2171.503839932226!2d9.9216601!3d57.025799799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932e28b12da57%3A0x1c246179ea15b9c7!2sst%2C%20Over%20B%C3%A6kken%202%2C%209000%20Aalborg!5e0!3m2!1sen!2sdk!4v1709572744440!5m2!1sen!2sdk";
    case 5:
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2173.3788136760286!2d10.1273771!3d56.993698300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464eceed1efeeee3%3A0x8a450d4adedcf548!2sGenbrugspladsen%20Storvorde!5e0!3m2!1sen!2sdk!4v1709572805131!5m2!1sen!2sdk";
    case 6:
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2169.6476623843414!2d10.333340100000001!3d57.057567999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464edb22ed941fa7%3A0xae0c40cbc1a52da9!2sSkovsg%C3%A5rdsvej%20145%2C%209370%20Hals!5e0!3m2!1sen!2sdk!4v1709572842040!5m2!1sen!2sdk";
    default:
      break;
  }
}

export default page;
