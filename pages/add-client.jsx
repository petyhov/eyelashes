import { useState } from "react";
import { CloseIcon } from "../src/components/addFlow";

const AddClient = () => {
  const [stage, setStage] = useState(1);
  const GetStage = ({ stage }) => {
    if (stage === 1) {
      return <h2>STAGE 1</h2>;
    }
    if (stage === 2) {
      return <h2>STAGE 2</h2>;
    }
    if (stage === 3) {
      return <h2>STAGE 3</h2>;
    }
    return <h2>STAGE last</h2>;
  };

  return (
    <>
      <CloseIcon />
      <GetStage stage={stage} />
    </>
  );
};

export default AddClient;
