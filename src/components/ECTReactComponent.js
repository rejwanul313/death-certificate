import React, { useEffect } from "react";
import * as ECT from "@whoicd/icd11ect";
import "@whoicd/icd11ect/style.css";

const ECTReactComponent = ({handleDiagnosis}) => {
  const iNo = 1;
  const selectedEntityFunction = (selectedEntity) => {
    const newDiagnosis = {
      title: `${selectedEntity.code} <br/> ${selectedEntity.title}`,
      label: `${selectedEntity.code} <br/> ${selectedEntity.title}`,
      value: `${selectedEntity.code} <br/> ${selectedEntity.title}`,
    };
    handleDiagnosis(newDiagnosis);
    ECT.Handler.clear(iNo);
  };
  useEffect(()=>{
    
  },[])
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
    </div>
  );
};

export default ECTReactComponent;
