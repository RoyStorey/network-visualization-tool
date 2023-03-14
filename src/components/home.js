import "../css/home.css";
import "../css/leftSide.css";
import "../css/rightSide.css";
import React, { useState } from "react";
<<<<<<< HEAD
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'
=======
>>>>>>> bcf057b48c82d3cc56a7c7263ecaeadc6e674fe8

function Home() {
  const [areaCovered, setAreaCovered] = useState("Area 6");
  const [editingMode, setEditingMode] = useState(false);
  const [savePreviewButton, setSaveButton] = useState("Saved");
<<<<<<< HEAD
  const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
  ];
  var data = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
  ];
  const [selectedswitch, setSelectedswitch] = useState({
=======
  const [selectedCircuit, setSelectedCircuit] = useState({
>>>>>>> bcf057b48c82d3cc56a7c7263ecaeadc6e674fe8
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
<<<<<<< HEAD
          <h2>Switches for {areaCovered}</h2>
=======
          <h2>Circuits for {areaCovered}</h2>
>>>>>>> bcf057b48c82d3cc56a7c7263ecaeadc6e674fe8
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
<<<<<<< HEAD
        <div class="switchContainer">
        <ReactTabulator
        data={data}
        columns={columns}
        layout={"fitData"}
        />
        </div>
        <div class="switchInfo">
          <header>
            <h2>Current Switch: {selectedswitch.id}</h2>
          </header>
          <div class="infoContainer">
            <div class="infoItem">
              <h5>Switch ID:</h5>
              <text>{selectedswitch.id}</text>
            </div>
            <div class="infoItem">
              <h5>Switch Description:</h5>
              <text>{selectedswitch.desc}</text>
            </div>
            <div class="infoItem">
              <h5>Building No:</h5>
              <text>{selectedswitch.bldg}</text>
            </div>
            <div class="infoItem">
              <h5>Room No:</h5>
              <text>{selectedswitch.rm}</text>
            </div>
            <div class="infoItem">
              <h5>Rack No:</h5>
              <text>{selectedswitch.rack}</text>
            </div>
            <div class="infoItem">
              <h5>Panel No:</h5>
              <text>{selectedswitch.panel}</text>
            </div>
            <div class="infoItem">
              <h5>Interface:</h5>
              <text>{selectedswitch.interface}</text>
            </div>
            <div class="infoItem">
              <h5>Medium:</h5>
              <text>{selectedswitch.medium}</text>
            </div>
          </div>
        </div>
=======
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
>>>>>>> bcf057b48c82d3cc56a7c7263ecaeadc6e674fe8
      </div>
    </div>
  );
}

export default Home;
