import React, { createContext, PropsWithChildren, useState } from "react";

type HoogiiContextType = {
  address: string;
  connect: () => void;
  isConnected: boolean;
  //todo add sign
};

export const HoogiiContext = createContext<HoogiiContextType>({
  address: "",
  connect: () => {},
  isConnected: false,
});

interface IProps {}

const HoogiiProvider = ({ children }: PropsWithChildren<IProps>) => {
  const [address, setAddress] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const connect = async () => {
    const connected: boolean = await window.chia.hoogii.request({
      method: "connect",
    });
    if (connected) {
      const accounts: string[] = await window.chia.hoogii.request({
        method: "accounts",
      });
      const newAddress = accounts?.[0];
      if (newAddress) {
        setIsConnected(true);
        setAddress(newAddress);
      }
    }
  };

  return (
    <HoogiiContext.Provider value={{ address, connect, isConnected }}>
      {children}
    </HoogiiContext.Provider>
  );
};

export default HoogiiProvider;
