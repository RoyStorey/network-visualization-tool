# Import necessary libraries
from ciscoconfparse import CiscoConfParse
import datetime
import string
import random
import json

# Initialize CiscoConfParse object with configuration file and syntax
parse = CiscoConfParse("example.conf", syntax="ios")

# Initialize empty list to hold interface objects
interfaceArray = []

# Define a class for interface objects
class interfaceObject:
    # Constructor to initialize interface object with parameters
    def __init__(intObj, hostname, interface, description, verified, swportmode, admindown):
        intObj.hostname = hostname
        intObj.interface = interface
        intObj.description = description
        intObj.verified = verified
        intObj.swportmode = swportmode
        intObj.admindown = admindown

# Function to write interface object to a JSON file
def writeInterfaceObject(formattedObject, i):
    pushableObject = json.dumps(formattedObject, indent=4)
    with open(f"interface{i}.json", "w") as outfile:
        outfile.write(pushableObject)

# Function to format interface object as a dictionary
def formatInterfaceObject(intObj):
    # Generate random string for primary key
    randomString = ''.join(random.choices(string.ascii_uppercase + string.digits, k=12))
    # Format object as a dictionary with necessary fields
    formattedObject = ({"hostname":intObj.hostname,"interface":intObj.interface,"description":intObj.description, "verified": intObj.verified, "swportmode": intObj.swportmode, "admindown": intObj.admindown})
    # Wrap formatted object in a list to conform to Django models
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

# Initialize a counter for interface objects
i=0

# Loop through each interface object found in the configuration file
for intf_obj in parse.find_objects("^interface"):

    # Get the current hostname from the configuration file
    currentHostname = parse.re_match_iter_typed(r"^hostname\s+(\S+)",default="")
    # Get the current interface name
    currentInterface = (intf_obj.text)

    # Initialize variables for description, switchport mode, and admin down status
    currentDescription = ""
    switchportMode = ""
    adminDown = ""

    # Loop through each child object of the current interface
    for c_obj in intf_obj.children:
        childobject = (str(c_obj.text))

        # Check if the child object contains a description field
        if childobject.find("description") == 1:
            currentDescription = childobject.replace('"', '')
        else:
            pass

        # Check if the child object contains a switchport mode field
        if childobject.find("switchport mode access") == 1:
            switchportMode = "access"
        elif childobject.find("switchport mode trunk") == 1:
            switchportMode = "trunk"
        else:
            pass

        # Check if the child object contains a shutdown or no shutdown field
        if childobject.find("shutdown") == 1:
            adminDown = "Administratively Down"
        elif childobject.find("no shutdown") == 1:
            adminDown = "Not Administratively Down"
        else:
            pass

        # Set the verification date to the current date and time
        dateVerified = datetime.datetime.now()

    # Format the current interface object as a dictionary and write

    # Create an instance of the interfaceObject class for the current interface
    currentIntObj = interfaceObject(currentHostname, currentInterface.lstrip("interface "), currentDescription.lstrip("description "), dateVerified, switchportMode, adminDown)
    
    # Format the current interface object as a dictionary and add it to the fileContents list
    fileContents = formatInterfaceObject(currentIntObj)
    
    # Write the current interface object to a JSON file
    writeInterfaceObject(fileContents, i)
    
    i = i+1
    print(i)