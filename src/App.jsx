import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import NotFound from "./Components/NotFound/NotFound";
import AdmitCard from "./Components/AdminDashboard/AdmitCard/AdmitCard";
import BusinessApplicants from "./Components/AdminDashboard/BusinessApplicants/BusinessApplicants";
import ScienceApplicants from "./Components/AdminDashboard/ScienceApplicants/ScienceApplicants";
import ScienceEvApplicants from "./Components/AdminDashboard/ScienceEvApplicants/ScienceEvApplicants";
import ScienceToBusiness from "./Components/AdminDashboard/ScienceToBusiness/ScienceToBusiness";
import ScienceToHum from "./Components/AdminDashboard/ScienceToHum/ScienceToHum";
import BusToHum from "./Components/AdminDashboard/BusToHum/BusToHum";
import Humanities from "./Components/AdminDashboard/Humanities/Humanities";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route path="businessApplicants" element={<BusinessApplicants />} />
          <Route path="scienceApplicants" element={<ScienceApplicants />} />
          <Route path="scienceEvApplicants" element={<ScienceEvApplicants />} />
          <Route path="scienceToBusiness" element={<ScienceToBusiness />} />
          <Route path="scienceToHum" element={<ScienceToHum />} />
          <Route path="busToHum" element={<BusToHum />} />
          <Route path="hum" element={<Humanities />} />
        </Route>
        <Route
          path="businessApplicants/downloadAdmitCard/:id"
          element={<AdmitCard />}
        ></Route>
        <Route
          path="scienceApplicants/downloadAdmitCard/:id"
          element={<AdmitCard />}
        ></Route>
        <Route
          path="scienceEvApplicants/downloadAdmitCard/:id"
          element={<AdmitCard />}
        ></Route>
        <Route
          path="scienceToBusiness/downloadAdmitCard/:id"
          element={<AdmitCard />}
        ></Route>
        <Route
          path="scienceToHum/downloadAdmitCard/:id"
          element={<AdmitCard />}
        ></Route>
        <Route
          path="busToHum/downloadAdmitCard/:id"
          element={<AdmitCard />}
        ></Route>
        <Route path="hum/downloadAdmitCard/:id" element={<AdmitCard />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
