import { ReactNode } from "react";
import { GetAddressFromPuzzleHash } from "../components/demo";

interface IApiMethodProps {
  title: string;
  apiDesc: string;
  node: () => JSX.Element;
}

const ApiMethod: IApiMethodProps[] = [
  {
    title: "getAddressFromPuzzleHash",
    apiDesc: "getAddressFromPuzzleHash(puzzleHash: string): hex string",
    node: GetAddressFromPuzzleHash,
  },
];

export default ApiMethod;
