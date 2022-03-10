import { useState } from "react";
import { getData } from "./jigsawLogic";

export const JigsawGet = () => {
  const [data, setData] = useState([]);

  const onClick = async function () {
    const response = await getData();
    console.log(response);    
    setData(response);
  };

  return data.length > 0 ? (
      <>    
    <h5 className="lbh-heading-h5">{`Note created by ${data[0].officerName}`}</h5>
    <div>{data[0].content}</div>
    <div>{`Note created on ${data[0].createdDate}`}</div>
    <div>{`Sensitve content? ${data[0].isSensitive}`}</div>
</>
    
  ) : (
    <>
      <h2>Press the button below to grab some data from Jigsaw</h2>
      <button
        class="govuk-button lbh-button"
        data-module="govuk-button"
        onClick={onClick}
      >
        Get Some Data
      </button>
    </>
  );
};
