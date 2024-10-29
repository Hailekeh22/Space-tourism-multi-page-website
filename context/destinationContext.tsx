"use client"
import { createContext, useContext, useState, ReactNode } from "react";
import { destinations } from "@/assets/destination/destinations";

interface DestinationTypes {
  name: string;
  description: string;
  distance: string;
  avgTime: string;
  imgSource: string;
}

const DestinationContext = createContext<DestinationTypes | null>(null);

export const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [destination, setDestination] = useState<DestinationTypes>({
    name: destinations.MOON.name,
    description: destinations.MOON.description,
    distance: destinations.MOON.distance,
    avgTime: destinations.MOON.travelTime,
    imgSource: destinations.MOON.img, 
  });

  return (
    <DestinationContext.Provider value={destination}>
      {children}
    </DestinationContext.Provider>
  );
};

export function useDestinationContext() {
  return useContext(DestinationContext);
}


