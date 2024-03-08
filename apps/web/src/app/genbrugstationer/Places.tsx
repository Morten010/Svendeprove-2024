import { getMap } from '@/lib/getMap';
import axios from 'axios';
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