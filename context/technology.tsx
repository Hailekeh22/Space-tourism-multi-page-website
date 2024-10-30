"use client"
import { createContext, useContext, ReactNode, useState } from "react";
import { technology } from "@/assets/technology/technology";


interface technologyTypes {
    title: string,
    portraitImg: string,
    landScapeImg: string,
    description: string
}

interface technologyContextTypes {
    tech: technologyTypes;
    changeTech: () => void;
}

const technologyContext = createContext<technologyContextTypes | null>(null);

export const technologyProvider = ({children}: {children: ReactNode}) => {

    const [tech, setTech] = useState<technologyTypes>({
        title: technology[0].title,
        portraitImg: technology[0].imgPortrait,
        landScapeImg: technology[0].imgLandScape,
        description: technology[0].description
    })

    const changeTech = () => {

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