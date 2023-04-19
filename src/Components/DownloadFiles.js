import { Player } from "@lottiefiles/react-lottie-player";
import * as React from "react";
import { FaFileDownload } from "react-icons/fa";
import logo from "../images/logo.png";
import "../css/style.css";

function DownloadFiles() {
  return (
    <>
      <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <nav class="navbar navbar-expand-lg  ">
          <a class="navbar-brand" href="#">
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
            <a class=" btn btn-full" href="/">
              Upload Files
            </a>
          </div>
        </nav>
      </div>

      <div style={{ backgroundColor: "#2D3E50", paddingBottom: "50px" }}>
        <div className="pt-4">
          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_kabycqad.json"
            className="player"
            loop
            autoplay
            style={{ height: "300px", width: "300px" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <div
            style={{ width: "80%" }}
            className="p-4 tablebox table-responsive"
          >
            <table
              className="table table-bordered table-sm table-hover"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr className="head">
                  <th scope="col">#</th>
                  <th scope="col">File Names</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>dhkkjdsjhkjsakhfdkj</td>
                  <td className="download">
                    <FaFileDownload />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>dhkkjdsjhkjsakhfdkj</td>
                  <td className="download">
                    <FaFileDownload />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>dhkkjdsjhkjsakhfdkj</td>
                  <td className="download">
                    <FaFileDownload />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>dhkkjdsjhkjsakhfdkj</td>
                  <td className="download">
                    <FaFileDownload />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>dhkkjdsjhkjsakhfdkj</td>
                  <td className="download">
                    <FaFileDownload />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadFiles;
