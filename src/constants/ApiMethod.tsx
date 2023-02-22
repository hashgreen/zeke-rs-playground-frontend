import { ReactNode } from "react";
import {
  GetAddressFromPuzzleHash,
  GetPuzzleHashFromAddress,
} from "../components/apiCard";

interface IApiMethodProps {
  id: string;
  title: string;
  apiDesc: string;
  node: ReactNode;
}

export interface IApiMethodSectionProps {
  id: string;
  title: string;
  methods: IApiMethodProps[];
}

const ApiMethod: IApiMethodSectionProps[] = [
  {
    id: "basic",
    title: "Address",
    methods: [
      {
        id: "addressToPuzzle",
        title: "Address to Puzzle Hash",
        apiDesc: "getPuzzleHashFromAddress(address: string): hex string",
        node: <GetAddressFromPuzzleHash />,
      },
      {
        id: "puzzleToAddress",
        title: "Puzzle Hash to Address",
        apiDesc: "getAddressFromPuzzleHash(puzzleHash: string): hex string",
        node: <GetPuzzleHashFromAddress />,
      },
    ],
  },
];

export default ApiMethod;
