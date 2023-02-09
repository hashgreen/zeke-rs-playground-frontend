import React, { useState } from "react";
import * as rs from "@yutin1987/yuumi_rs";
import {
  DemoArrowButton,
  DemoCardContent,
  DemoInputTextField,
  DemoOutputTextField,
} from "../demo";

const GetAddressFromPuzzleHash = () => {
  const [address, setAddress] = useState<string>("");
  const [puzzleHash, setPuzzleHash] = useState<string>("");

  const handleAddressChang = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAddress(event.target.value);
  };

  const handleTransferClick = () => {
    setPuzzleHash(rs.getPuzzleHashFromAddress(address));
  };

  return (
    <DemoCardContent>
      <DemoInputTextField
        label="Address"
        value={address}
        placeholder="Address"
        handleChange={handleAddressChang}
      />
      <DemoArrowButton handleClick={handleTransferClick} />
      <DemoOutputTextField label="Puzzle Hash" value={puzzleHash} />
    </DemoCardContent>
  );
};

export default GetAddressFromPuzzleHash;
