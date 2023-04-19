import * as React from "react";
import "../css/style.css";
import logo from "../images/logo.png";

function Login() {
  return (
    <div  style={{ backgroundColor: "#2D3E50", }}>
      <div className="py-5">
        <div class="container ">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-3">
                          <img src={logo} width={"100px"}></img>
                          <span class="h1 fw-bold mb-0"></span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-2"
                          style={{ letterSpacing: "1px" }}
                        >
                          <b> Sign into your account</b>
                        </h5>

                        <div class="form-outline mb-3">
                          <label class="form-label" for="form2Example17">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-md"
                          />
                        </div>

                        <div class="form-outline mb-3">
                          <label class="form-label" for="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-md"
                          />
                          <div className="mt-2 d-flex justify-content-end">
                            <a class="small text-muted" href="#!">
                              Forgot password?
                            </a>
                          </div>
                        </div>

                        <div class="pt-1 ">
                          <a class=" btn  btn-full" href="/Uploads">
                            Login
                          </a>
                        </div>
                        {/* <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
