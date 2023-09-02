
import './App.css';
import DiseaseReportB from './components/DiseaseReportB';
import DiseaseReportC from './components/DiseaseReportC';
import DiseaseReportD from './components/DiseaseReportD';
import Modal from './components/Modal';

function App() {

  return (
    <div>
      <br/>
      <Modal />
      <br/>
      <DiseaseReportB/>
      <br/>
      <DiseaseReportC />
      <br/>
      <DiseaseReportD />
    </div>
  );
}

export default App;
