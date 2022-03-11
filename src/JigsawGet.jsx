import { useState } from "react";
import { getData } from "./apiCalls";
import { formatDateString } from "./utils";

export const JigsawGet = () => {
  const [data, setData] = useState([]);

  const onClick = async function () {
    const response = await getData();
    console.log(response);
    setData(response);
  };

  return data.length > 0 ? (
    <>
      {data.map((note, index) => {
        return (
          <>
          <li className="lbh-timeline__event lbh-timeline__event--minor" key={index}>
            <div className="sv-timeline__card">
            <h5 className="lbh-heading-h5">{`Note created by ${note.officerName}`}</h5>
            <h5 className="lbh-heading-h5">
                                    {`Note created at ${formatDateString(note.createdDate, true)}`}
                                </h5>
            <div className="lbh-body-s">{note.content}</div>            
            <div>{`Sensitve content? ${note.isSensitive}`}</div>
            </div>
          </li>
          </>
        );
      })}
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
