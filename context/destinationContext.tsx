"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { destinations } from "@/assets/destination/destinations";

interface DestinationTypes {
  name: string;
  description: string;
  distance: string;
  avgTime: string;
  imgSource: string;
}

interface DestinationContextTypes {
  destination: DestinationTypes;
  changeDestination: (name: string) => void;
}

const DestinationContext = createContext<DestinationContextTypes | null>(null);

export const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [destination, setDestination] = useState<DestinationTypes>({
    name: destinations.MOON.name,
    description: destinations.MOON.description,
    distance: destinations.MOON.distance,
    avgTime: destinations.MOON.travelTime,
    imgSource: destinations.MOON.img,
  });

  const changeDestination = (name: string) => {
    const selectedDestination = destinations[name as keyof typeof destinations];
    if (selectedDestination) {
      setDestination({
        name: selectedDestination.name,
        description: selectedDestination.description,
        distance: selectedDestination.distance,
        avgTime: selectedDestination.travelTime,
        imgSource: selectedDestination.img,
      });
    }
  };

  return (
    <DestinationContext.Provider value={{ destination, changeDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};

export function useDestinationContext() {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error(
      "useDestinationContext must be used within a DestinationProvider"
    );
  }
  return context;
}
