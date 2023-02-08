import React, { useState } from "react";
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
    // TODO:
    setPuzzleHash(address);
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
