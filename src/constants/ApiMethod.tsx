import { ReactNode } from "react";
import {
  GetAddressFromPuzzleHash,
  GetPuzzleHashFromAddress,
} from "../components/apiCard";

interface IApiMethodProps {
  title: string;
  apiDesc: string;
  node: ReactNode;
}

const ApiMethod: IApiMethodProps[] = [
  {
    title: "Address to Puzzle Hash",
    apiDesc: "getAddressFromPuzzleHash(puzzleHash: string): hex string",
    node: <GetAddressFromPuzzleHash />,
  },
  {
    title: "Puzzle Hash to Address",
    apiDesc: "getPuzzleHashFromAddress(address: string): hex string",
    node: <GetPuzzleHashFromAddress />,
  },
];

export default ApiMethod;
