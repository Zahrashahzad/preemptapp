import * as React from "react";
import "../css/style.css";
import { FileUploader } from "react-drag-drop-files";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../images/logo.png";

function UploadFiles() {
  const [file, setFile] = React.useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["csv", "excel"];
  return (
    <div>
      <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <nav class="navbar navbar-expand-lg  ">
          <a class="navbar-brand" href="/">
            <img src={logo} width={"100px"}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-end "
            id="navbarNavDropdown"
          >
            <a class=" btn btn-full" href="/Dowloads">
              Downloads
            </a>
          </div>
        </nav>
      </div>

      <header style={{ backgroundColor: "#2D3E50" }}>
        <div class="hero-textbox">
          {/* <h1 style={{ color: "#3E36A4" }}>
            Upload your files and get downloaded at anytime
          </h1> */}
          <Player
            src="https://assets5.lottiefiles.com/packages/lf20_jvkRrK.json"
            className="player"
            loop
            autoplay
            style={{ height: "500px", width: "500px" }}
          />
          {/* <a class="btn btn-full" href="#">
            Upload Files
          </a>
          <a class="btn btn-ghost" href="#">
            Download Now
          </a> */}
        </div>
      </header>
      <div className="d-flex justify-content-center filesection card p-4">
        <h6 style={{ color: "#2D3E50" }} className="mb-3">
          Drag & Drop Your Files
        </h6>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p style={{ fontSize: "12px" }} className="mt-1 mb-3">
          {file ? `File name: ${file[0].name}` : "no files uploaded yet"}
        </p>
        <a class="btn btn-full" href="#">
          Upload Files
        </a>
      </div>
    </div>
  );
}
export default UploadFiles;
