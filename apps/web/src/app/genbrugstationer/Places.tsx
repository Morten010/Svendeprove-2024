import { getMap } from '@/lib/getMap';
import axios from 'axios';
import Link from 'next/link';
import { FC } from 'react'

interface placesProps {
  
}

type PlaceProps = {
    id: number;
    name: string;
    address: string;
    zipcode: number;
    city: string;
};

const Places: FC<placesProps> = async ({}) => {
   try{
    const { data } = await axios(
        "http://localhost:4000/orgs?attributes=id,name,address,zipcode,city",
    );

    return (
        <div className="mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-[80vw] max-w-screen-lg gap-10 place-content-center my-10 sm:my-0 overflow-hidden">
            {data.map((place: PlaceProps) => (
            <Link
            href={`/genbrugstationer/${place.id}`}
            className="bg-white rounded-2xl overflow-hidden max-w-[352.28px] w-full shadow-[0px_3px_6px_#00000029] h-full"
            >
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
            </Link>
            ))}
        </div>
    )
   }catch(err){
    return(
        <div
        className='text-center h-full w-full grid place-content-center'
        >
            <h2
            className='text-3xl font-bold text-primary'
            >
                Kunne ikke få fat i databasen
            </h2>
            <p
            className='text-black/60'
            >
                Prøv genindlæse siden eller kom tilbage senere
            </p>
        </div>
    )
   }
}

export default Places