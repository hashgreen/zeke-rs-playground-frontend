import { ReactNode } from "react";
import { GetAddressFromPuzzleHash } from "../components/apiCard";

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
];

export default ApiMethod;
