import React, { useEffect, useState } from "react";
import * as ECT from "@whoicd/icd11ect";
import "@whoicd/icd11ect/style.css";
import SelectedDataList from "./SelectedDataList";
import Modal from "./Modal";

const ECTReactComponent = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [selectedDataB, setSelectedDataB] = useState(null);
  const [selectedDataC, setSelectedDataC] = useState(null);
  const [selectedDataD, setSelectedDataD] = useState(null);
  const iNo = 1;
  const selectedEntityFunction = (selectedEntity) => {
    const newDiagnosis = {
      title: `${selectedEntity.title}`,
      label: `${selectedEntity.title}`,
      value: `${selectedEntity.title}`,
    };
    handleDiagnosis(newDiagnosis);
    ECT.Handler.clear(iNo);
  };
  const handleDiagnosis = (data) => {
    console.log(data);
    setSelectedData(data);
    ECT.Handler.clear(iNo);
  };
  const handleDiagnosisB = (data) => {
    console.log(data);
    setSelectedDataB(data);
    ECT.Handler.clear(iNo);
  };

  useEffect(() => {
    const settings = {
      apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
      autoBind: false,
      wordsAvailable: false,
      height: "50vh"
    };

    const callbacks = { selectedEntityFunction };
    ECT.Handler.configure(settings, callbacks);

    ECT.Handler.bind(iNo);
    return () => {
      ECT.Handler.clear(iNo);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <input
        type="text"
        className="ctw-input"
        autoComplete="off"
        data-ctw-ino={iNo}
        style={{ width: "99%", height: '30px' }}
      />
      <div className="ctw-window" data-ctw-ino={iNo}></div>
      <SelectedDataList selectedData={selectedData} selectedDataB={selectedDataB} selectedDataC={selectedDataC} selectedDataD={selectedDataD}/>

    </div>
  );
};

export default ECTReactComponent;
