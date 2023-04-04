from ciscoconfparse import CiscoConfParse
import datetime
import string
import random

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

    def pushInterfaceObject(intObj):
        randomstring = ''.join(random.choices(string.ascii_uppercase + string.digits, k=12))
        pushthing = ({"hostname":intObj.hostname,"interface":intObj.interface,"description":intObj.description, "verified": intObj.verified, "swportmode": intObj.swportmode, "admindown": intObj.admindown})
        filecontents = [
    {
        "pk":randomstring,
        "model":"earlkit.VisualizerInterfaceList",
        "fields":{
            str(pushthing)
        }
    }
]
        file1 = open("MyFile3.json", "w")
        file1.write(str(filecontents))
        file1.close()


for intf_obj in parse.find_objects("^interface"):

    currentHostname = parse.re_match_iter_typed(r"^hostname\s+(\S+)",default="")
    currentInterface = (intf_obj.text)

    currentDescription = ""
    switchportMode = ""
    
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
            adminDown = "Not Administratively Down"
        else:
            pass

        # dateVerified = datetime.datetime.now()
        dateVerified = ""

    currentIntObj = interfaceObject(currentHostname, currentInterface, currentDescription, dateVerified, switchportMode, adminDown)
    print(currentHostname, currentInterface, currentDescription, dateVerified, switchportMode, adminDown)
    currentIntObj.pushInterfaceObject()

# print(interfaceArray)