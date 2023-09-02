import React from "react";

const SelectedDataList = ({ selectedData, selectedDataB, selectedDataC, selectedDataD }) => {
  return (
    <div >
      {selectedData && (
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <span style={{width: '60%', alignItems: 'flex-start'}}>{selectedData.title}</span>
          <input style={{width: '30%', float: 'left', margin: ' 0 5px',height: '25px'}} type="date" placeholder="Date"/>
          <button style={{width: '30px', height: '30px'}}>X</button>
        </div>
      )}
      {selectedDataB && (
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <span style={{width: '60%', alignItems: 'flex-start'}}>{selectedData.title}</span>
          <input style={{width: '30%', float: 'left', margin: ' 0 5px',height: '25px'}} type="date" placeholder="Date"/>
          <button style={{width: '30px', height: '30px'}}>X</button>
        </div>
      )}
      {selectedDataC && (
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <span style={{width: '60%', alignItems: 'flex-start'}}>{selectedData.title}</span>
          <input style={{width: '30%', float: 'left', margin: ' 0 5px',height: '25px'}} type="date" placeholder="Date"/>
          <button style={{width: '30px', height: '30px'}}>X</button>
        </div>
      )}
      {selectedDataD && (
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <span style={{width: '60%', alignItems: 'flex-start'}}>{selectedData.title}</span>
          <input style={{width: '30%', float: 'left', margin: ' 0 5px',height: '25px'}} type="date" placeholder="Date"/>
          <button style={{width: '30px', height: '30px'}}>X</button>
        </div>
      )}
  </div>
  
  );
};

export default SelectedDataList;
