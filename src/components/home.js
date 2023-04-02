import "../css/home.css";
import "../css/switch-info.css";
import "../css/switch-list.css";
import React, { useState, useEffect } from "react";
import '/node_modules/react-tabulator/lib/styles.css';
import '/node_modules/react-tabulator/css/tabulator_modern.css';
// import '/node_modules/react-tabulator/css/tabulator_midnight.css';
import { ReactTabulator } from 'react-tabulator'

function Home() {
  const [switchListData, setSwitchListData] = useState([]);
  const [switchInterfaceListData, setInterfaceListData] = useState([]);

  useEffect(()=>{
    fetch(`http://172.16.220.110:8000/api/VisualizerSwitchList/?format=json`)
        .then((response) => response.json())
        .then((parsedDBData) => {
          // console.log(parsedDBData)
          setSwitchListData(parsedDBData)
        })
        .catch((error) => console.error(error));
    },[]);

    useEffect(()=>{
      fetch(`http://172.16.220.110:8000/api/VisualizerInterfaceList/?format=json` + new URLSearchParams({
        hostname: 'cumcore'
      }))
          .then((response) => response.json())
          .then((parsedDBData) => {
            console.log(parsedDBData)
            setInterfaceListData(parsedDBData)
          })
          .catch((error) => console.error(error));
      },[]);

  const [areaCovered, setAreaCovered] = useState("Area 6");
  const [editingMode, setEditingMode] = useState(false);
  const [savePreviewButton, setSaveButton] = useState("Saved");
  const switchInterfaceListColumns = [
    { title: "hostname", field: "hostname",},
    { title: "interface", field: "interface"},
    { title: "description", field: "description"},
    { title: "verified", field: "verified"},
    { title: "swportmode", field: "swportmode"},
    { title: "admindown", field: "admindown"},
  ];
  const VLANColumns = [
    { title: "vlan", field: "vlan", width: 150},
    { title: "ips", field: "ips"},
  ];
  var switchData = [
    {portid:'1/1/1', conn:"Stack Supervisor Link", vlan:'Dual-Active',verified:'07/26/22',initial:'JJH'},
    {portid:'1/1/2', conn:"Link to GSOC SW -> Gig 0/2", vlan:'Trunk',verified:'07/26/22',initial:'JJH'},
    {portid:'1/1/3', conn:"Video Wall Rack - mx-laptop-02", vlan:'220',verified:'10/04/22',initial:'WFR'},
    {portid:'1/1/4', conn:"DOT Net Wifi AP", vlan:'57',verified:'10/04/22',initial:'WFR'},
    {portid:'1/1/5', conn:"SCIF DESK 01 - mdt-clear-01", vlan:'220',verified:'10/04/22',initial:'WFR'},
  ];
  const switchListColumns = [
    { title: "switch", field: "switch", width: 150,},
    { title: "bldg", field: "bldg"},
    { title: "room", field: "room"},
    { title: "rack", field: "rack"},
    { title: "panel", field: "panel"},
    { title: "u", field: "u"},
    { title: "mgmtip", field: "mgmtip"},
    { title: "devtype", field: "devtype"},
    { title: "ios", field: "ios"},
    { title: "sn", field: "sn"},
  ];
  const [selectedswitch, setSelectedswitch] = useState({
    switch:"ComCoreSW1",
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
      <div class="top-container">
        <div class="top-cell-container">
        <header>
              <h2>Current Switch: {selectedswitch.switch}</h2>
            </header>
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
            <div class="infoContainer">
            <ReactTabulator
                selectable={1}
                data={switchInterfaceListData}
                columns={switchInterfaceListColumns}
                layout={"fitColumns"}
              />
            </div>
          </div>
        </div>
        <div class="top-cell-container">
          <div class="switchInfo">
            <div class="infoContainer">
            <ReactTabulator
                selectable={1}
                data={switchData}
                columns={VLANColumns}
                layout={"fitColumns"}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-Side">
        <div class="bottom-Header">
          <h2>Switches for {areaCovered}</h2>
        </div>
        <div class="bottom-Body">
          <div class="spreadsheet">
            <ReactTabulator
              selectable={1}
              data={switchListData}
              columns={switchListColumns}
              layout={"fitColumns"}
              options={{pagination: 'local', paginationSize:'6'}}
            />
          </div>
        </div>
        {/* <div class="bottom-Footer">
          <h3 onClick={toggleEdit}>{editingMode ? "View" : "Edit"}</h3>
          <h4>- {editingMode ? "Editing" : "Viewing"} -</h4>
          <h3 onClick={resetSaved}>{savePreviewButton}</h3>
        </div> */}
      </div>
    </div>
  );
}

export default Home;