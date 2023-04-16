import "../css/home.css";
import "../css/switch-info.css";
import "../css/switch-list.css";
import React, { useState, useEffect} from "react";
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
      fetch(`http://172.16.220.110:8000/api/VisualizerInterfaceList/?format=json`)
          .then((response) => response.json())
          .then((parsedDBData) => {
            // console.log(parsedDBData)
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
            <h4>Current Switch: {selectedswitch.switch}</h4>
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
                  options={{pagination: 'local', paginationSize:'5'}}
                />
            </div>
          </div>
        </div>
        <div class="top-cell-container vlan-ip-spreadsheet">
          <div class="switchInfo">
            <div class="infoContainer">
            <ReactTabulator
                selectable={1}
                //Go through each interface, find the vlan of that interface. If the vlan is unique, add it to a unique vlans array. This
                //array is going to be a list of objects. Each object has a specific IP as the key, and the property is going to be the vlan its a part of.
                //This might be how to do this best?
                data={switchInterfaceListData}
                columns={VLANColumns}
                layout={"fitColumns"}
                options={{pagination: 'local', paginationSize:'9'}}
              />
            </div>
          </div>
        </div>
      </div>

      
      <div class="bottom-Side">
        <div class="bottom-Header">
          <h4>Switches for {areaCovered}: Please Select a Switch</h4>
        </div>
        <div class="bottom-Body">
          <div class="spreadsheet">
            <ReactTabulator
              selectable={1}
              data={switchListData}
              columns={switchListColumns}
              layout={"fitColumns"}
              options={{pagination: 'local', paginationSize:'9'}}
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