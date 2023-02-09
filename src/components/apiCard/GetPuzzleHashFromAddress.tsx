import React, { useState } from "react";
import * as rs from "@yutin1987/yuumi_rs";
import {
  DemoArrowButton,
  DemoCardContent,
  DemoInputTextField,
  DemoOutputTextField,
} from "../demo";

const GetPuzzleHashFromAddress = () => {
  const [puzzleHash, setPuzzleHash] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handlePuzzleHashChang = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPuzzleHash(event.target.value);
  };

  const handleTransferClick = () => {
    setAddress(rs.getAddressFromPuzzleHash(puzzleHash));
  };

  return (
    <DemoCardContent>
      <DemoInputTextField
        label="Puzzle Hash"
        value={puzzleHash}
        placeholder="Puzzle Hash"
        handleChange={handlePuzzleHashChang}
      />
      <DemoArrowButton handleClick={handleTransferClick} />
      <DemoOutputTextField label="Address" value={address} />
    </DemoCardContent>
  );
};

export default GetPuzzleHashFromAddress;
