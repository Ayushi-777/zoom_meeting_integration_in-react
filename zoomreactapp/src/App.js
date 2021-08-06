// import meeting from "./meeting.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  const zoomMeeting = () => {
    const data = {
      email: "ayushigupta@idigizen.com",
    };
    console.log(username);
    axios
      .post(`http://localhost:3444/meeting`, data)
      .then((response) => {
        let URL =
          response.data.join_url.replaceAll(
            "https://us04web.zoom.us/j/",
            "http://localhost:9996/?"
          ) + `?role=1?name=${username}`;
        console.log(URL);
        window.location.replace(`${URL}`);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Student /> */}
        <h1>Zoom Meeting</h1>
        <div className="card">
          <h5>
            Trainer Name&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              style={{
                width: "300px",
                borderRadius: "5px",
                padding: "8px 12px",
                fontSize: "18px",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </h5>

          <div className="row" style={{ margin: "10px" }}>
            <div className="column">
              <div
                className="row"
                style={{ margin: "10px", marginTop: "50px" }}
              >
                <button
                  className="btn btn-warning"
                  style={{
                    width: "290px",
                    height: "80px",
                    fontSize: "20px",
                    fontFamily: "cursive",
                    marginLeft:"80%",
                  }}
                  onClick={zoomMeeting}
                >
                  Create Meeting
                </button>
              </div>
            </div>
            {/* <div className="column" style={{ float: "right" }}>
              <img
                src="\meeting.jpg"
                height="330px"
                width="400px"
                style={{
                  margin: "10px",
                  borderRadius: "50px",
                }}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
