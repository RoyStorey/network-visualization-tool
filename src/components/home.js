import "../css/home.css";
import "../css/leftSide.css";
import "../css/rightSide.css";
import React, { useState } from "react";

function Home() {
  const [areaCovered, setAreaCovered] = useState("Area 6");
  const [editingMode, setEditingMode] = useState(false);
  const [savePreviewButton, setSaveButton] = useState("Saved");
  const [selectedCircuit, setSelectedCircuit] = useState({
    id: "N/A",
    desc: "N/A",
    bldg: "1558",
    rm: "N/A",
    rack: "N/A",
    panel: "N/A",
    interface: "N/A",
    medium: "N/A",
  });

  function toggleEdit() {
    if (editingMode == true) {
      setEditingMode(false);
    } else {
      setEditingMode(true);
      setSaveButton("Save");
    }
  }

  function resetSaved() {
    setSaveButton("Saved");
  }

  function Racks() {
    var rackArray = [];
    for (let i = 0; i < 3; i++) {
      let rack = <div class="rack">{i}</div>;
      rackArray.push(rack);
    }
    return rackArray;
  }

  return (
    <div class="toolContainer">
      <div class="leftSide">
        <div class="leftHeader">
          <h2>Circuits for {areaCovered}</h2>
        </div>
        <div class="leftBody">
          <div class="spreadsheet">
            <h3>Need to get with Brandon before developing this part.</h3>
          </div>
        </div>
        <div class="leftFooter">
          <h3 onClick={toggleEdit}>{editingMode ? "View" : "Edit"}</h3>
          <h4>- {editingMode ? "Editing" : "Viewing"} -</h4>
          <h3 onClick={resetSaved}>{savePreviewButton}</h3>
        </div>
      </div>
      <div class="rightSide">
        <div class="circuitInfo">
          <header>
            <h2>Current Circuit: {selectedCircuit.id}</h2>
          </header>
          <div class="infoContainer">
            <div class="infoItem">
              <h5>Circuit ID:</h5>
              <text>{selectedCircuit.id}</text>
            </div>
            <div class="infoItem">
              <h5>Circuit Description:</h5>
              <text>{selectedCircuit.desc}</text>
            </div>
            <div class="infoItem">
              <h5>Building No:</h5>
              <text>{selectedCircuit.bldg}</text>
            </div>
            <div class="infoItem">
              <h5>Room No:</h5>
              <text>{selectedCircuit.rm}</text>
            </div>
            <div class="infoItem">
              <h5>Rack No:</h5>
              <text>{selectedCircuit.rack}</text>
            </div>
            <div class="infoItem">
              <h5>Panel No:</h5>
              <text>{selectedCircuit.panel}</text>
            </div>
            <div class="infoItem">
              <h5>Interface:</h5>
              <text>{selectedCircuit.interface}</text>
            </div>
            <div class="infoItem">
              <h5>Medium:</h5>
              <text>{selectedCircuit.medium}</text>
            </div>
          </div>
        </div>
        <div class="racks">{Racks()}</div>
      </div>
    </div>
  );
}

export default Home;
