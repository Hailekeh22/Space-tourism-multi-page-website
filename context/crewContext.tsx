"use client"
import { createContext, useContext, ReactNode, useState } from "react";
import { crew } from "@/assets/crew/Crew";

interface crewTypes {
    job: string,
    name: string,
    description: string,
    image: string
}

interface crewContextTypes {
  crewMember: crewTypes;
  changeCrew: (a:number) => void;
}

const CrewContext = createContext<crewContextTypes | null>(null);

export const CrewProvider = ({ children }: { children: ReactNode }) => {
  const [crewMember, setcrewMember] = useState<crewTypes>({
    job: crew[0].job,
    name: crew[0].name,
    description: crew[0].description,
    image: crew[0].img,
  });

  const changeCrew = (a: number) => {
    setcrewMember({
      job: crew[a].job,
      name: crew[a].name,
      description: crew[a].description,
      image: crew[a].img,
    });
  };

  return (
    <CrewContext.Provider value={{ crewMember, changeCrew }}>
      {children}
    </CrewContext.Provider>
  );
};

export function useCrewContext() {
    const context = useContext(CrewContext);
    if (!context) {
      throw new Error(
        "useCrewContext must be used within a DestinationProvider"
      );
    }
    return context;
}