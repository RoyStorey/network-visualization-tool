from ciscoconfparse import CiscoConfParse
import datetime
import string
import random
import json
import subprocess

parse = CiscoConfParse("example.conf", syntax="ios")

interfaceArray = []



class interfaceObject:
    def __init__(intObj, hostname, interface, description, verified, swportmode, admindown):
        intObj.hostname = hostname
        intObj.interface = interface
        intObj.description = description
        intObj.verified = verified
        intObj.swportmode = swportmode
        intObj.admindown = admindown

def writeInterfaceObject(formattedObject, i):
    pushableObject = json.dumps(formattedObject, indent=4)
    with open(f"interface{i}.json", "w") as outfile:
        outfile.write(pushableObject)

def formatInterfaceObject(intObj):
    randomString = ''.join(random.choices(string.ascii_uppercase + string.digits, k=12))
    formattedObject = ({"hostname":intObj.hostname,"interface":intObj.interface,"description":intObj.description, "verified": intObj.verified, "swportmode": intObj.swportmode, "admindown": intObj.admindown})
    fileContents = [
        {
            "pk":randomString,
            "model":"earlkit.VisualizerInterfaceList",
            "fields":{
                str(formattedObject)
            }
        }
    ]
    return fileContents



i=0

# Loop through each interface
for intf_obj in parse.find_objects("^interface"):

    currentHostname = parse.re_match_iter_typed(r"^hostname\s+(\S+)",default="")
    currentInterface = (intf_obj.text)

    currentDescription = ""
    switchportMode = ""
    
    # Loop through each child of the interface
    for c_obj in intf_obj.children:
        childobject = (str(c_obj.text))
        # print(childobject)

        if childobject.find("description") == 1:
            currentDescription = childobject.replace('"', '')
        else:
            pass

        if childobject.find("switchport mode access") == 1:
            switchportMode = "access"
        elif childobject.find("switchport mode trunk") == 1:
            switchportMode = "trunk"
        else:
            pass

        if childobject.find("shutdown") == 1:
            adminDown = "Administratively Down"
        elif childobject.find("switchport mode trunk") == 1:
            adminDown = "Not Administratively Down" #FIX
        else:
            pass

        # dateVerified = datetime.datetime.now()
        dateVerified = ""

    randomString = ''.join(random.choices(string.ascii_uppercase + string.digits, k=12))

    currentIntObj = [
        {
            "pk":randomString,
            "model":"earlkit.VisualizerInterfaceList",
            "fields":
                {"hostname":currentHostname, "interface":currentInterface.lstrip("interface "), "description":currentDescription.lstrip("description "), "verified":dateVerified, "swportmode":switchportMode, "admindown":adminDown}   
            }
        ]

    writeInterfaceObject(currentIntObj, i)

    pushCommand = f"python3 ../../backend/manage.py loaddata ./interface{i}.json --format json"
    result = subprocess.run(pushCommand, shell=True, capture_output=True, text=True)
    print(result.stdout)
    
    i = i+1
    print(i)