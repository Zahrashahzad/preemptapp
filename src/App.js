import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./Components/UploadFiles";
import DownloadFiles from "./Components/DownloadFiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Uploads" element={<UploadFiles />} />
        <Route path="/Dowloads" element={<DownloadFiles />} />
        {/* <Route path="/Dashboard" element={<DashboardMain />}>
          <Route path="/Dashboard/Content" element={<Content />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
