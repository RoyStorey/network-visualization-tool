import "../css/home.css";
import "../css/leftSide.css";
import "../css/rightSide.css";
import React, { useState } from "react";
import '/node_modules/react-tabulator/lib/styles.css';
import '/node_modules/react-tabulator/css/tabulator_modern.css';
// import '/node_modules/react-tabulator/css/tabulator_midnight.css';
import { ReactTabulator } from 'react-tabulator'

function Home() {
  const [areaCovered, setAreaCovered] = useState("Area 6");
  const [editingMode, setEditingMode] = useState(false);
  const [savePreviewButton, setSaveButton] = useState("Saved");
  const switchColumns = [
    { title: "portid", field: "portid",},
    { title: "conn", field: "conn"},
    { title: "vlan", field: "vlan"},
    { title: "verified", field: "verified"},
    { title: "initial", field: "initial"},
  ];
  var switchData = [
    {portid:'1/1/1', conn:"Stack Supervisor Link", vlan:'Dual-Active',verified:'07/26/22',initial:'JJH'},
    {portid:'1/1/2', conn:"Link to GSOC SW -> Gig 0/2", vlan:'Trunk',verified:'07/26/22',initial:'JJH'},
    {portid:'1/1/3', conn:"Video Wall Rack - mx-laptop-02", vlan:'220',verified:'10/04/22',initial:'WFR'},
    {portid:'1/1/4', conn:"DOT Net Wifi AP", vlan:'57',verified:'10/04/22',initial:'WFR'},
    {portid:'1/1/5', conn:"SCIF DESK 01 - mdt-clear-01", vlan:'220',verified:'10/04/22',initial:'WFR'},
  ];
  const switchListColumns = [
    { title: "switch", field: "name", width: 150,},
    { title: "bldg", field: "bldg"},
    { title: "room", field: "room"},
    { title: "rack", field: "rack"},
    { title: "panel", field: "panel"},
    { title: "u", field: "u"},
  ];
  var switchListData = [
    {id:1, name:"ComCoreSW1", bldg:'1558',room:'27',rack:'14',panel:'10',u:'32'},
    {id:2, name:"ComCoreSW2", bldg:'1558',room:'27',rack:'14',panel:'10',u:'33'},
    {id:3, name:"ComCoreSW3", bldg:'1558',room:'27',rack:'14',panel:'10',u:'34'},
    {id:4, name:"ComCoreSW4", bldg:'1558',room:'27',rack:'14',panel:'10',u:'35'},
    {id:5, name:"ComCoreSW5", bldg:'1558',room:'27',rack:'14',panel:'10',u:'36'},
    {id:1, name:"ComCoreSW1", bldg:'1558',room:'27',rack:'14',panel:'10',u:'32'},
    {id:2, name:"ComCoreSW2", bldg:'1558',room:'27',rack:'14',panel:'10',u:'33'},
    {id:3, name:"ComCoreSW3", bldg:'1558',room:'27',rack:'14',panel:'10',u:'34'},
    {id:4, name:"ComCoreSW4", bldg:'1558',room:'27',rack:'14',panel:'10',u:'35'},
    {id:5, name:"ComCoreSW5", bldg:'1558',room:'27',rack:'14',panel:'10',u:'36'},
  ];
  const [selectedswitch, setSelectedswitch] = useState({
    portid: "1/1/1",
    connection: "Stack Supervisor Link",
    vlan: "Dual-Active",
    verified: "07/26/22",
    initial: "JJH",
    runconf: "Running Configuration goes here."
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
          <h2>Switches for {areaCovered}</h2>
        </div>
        <div class="leftBody">
          <div class="spreadsheet">
            <ReactTabulator
              selectable={1}
              data={switchListData}
              columns={switchListColumns}
              layout={"fitColumns"}
            />
          </div>
        </div>
        <div class="leftFooter">
          <h3 onClick={toggleEdit}>{editingMode ? "View" : "Edit"}</h3>
          <h4>- {editingMode ? "Editing" : "Viewing"} -</h4>
          <h3 onClick={resetSaved}>{savePreviewButton}</h3>
        </div>
      </div>
      <div class="rightSide">
        <div class="switchContainer">
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port"></div>
          <div class="placeholder-port"></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port "></div>
          <div class="placeholder-port"></div>
          <div class="placeholder-port"></div>    
        </div>
        <div class="switchInfo">
          <header>
            <h2>Current Switch: {selectedswitch.portid}</h2>
          </header>
          <div class="infoContainer">
          <ReactTabulator
              selectable={1}
              data={switchData}
              columns={switchColumns}
              layout={"fitColumns"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;