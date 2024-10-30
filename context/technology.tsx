"use client"
import { createContext, useContext, ReactNode, useState } from "react";
import { technology } from "@/assets/technology/technology";


interface technologyTypes {
    id: number,
    title: string,
    portraitImg: string,
    landScapeImg: string,
    description: string
}

interface technologyContextTypes {
    tech: technologyTypes;
    changeTech: (a:number) => void;
}

const technologyContext = createContext<technologyContextTypes | null>(null);

export const TechnologyProvider = ({children}: {children: ReactNode}) => {

    const [tech, setTech] = useState<technologyTypes>({
        id: technology[0].id,
        title: technology[0].title,
        portraitImg: technology[0].imgPortrait,
        landScapeImg: technology[0].imgLandScape,
        description: technology[0].description
    })

    const changeTech = (a:number) => {
        setTech({
          id: technology[a].id,
          title: technology[a].title,
          portraitImg: technology[a].imgPortrait,
          landScapeImg: technology[a].imgLandScape,
          description: technology[a].description,
        });
    }



    return (
        <technologyContext.Provider value={{tech, changeTech}}>
            {children}
        </technologyContext.Provider>
    )

}

export const useTechnologyContext = () => {
    const context = useContext(technologyContext);
    if (!context) {
      throw new Error(
        "technologyContext must be used within a DestinationProvider"
      );
    }
    return context;
}