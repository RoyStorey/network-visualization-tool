from ciscoconfparse import CiscoConfParse
import datetime

parse = CiscoConfParse('example.conf', syntax='ios')


class interfaceObject:
    def __init__(intObj, hostname, interface, description, verified, swportmode, admindown):
        intObj.hostname = hostname
        intObj.interface = interface
        intObj.description = description
        intObj.verified = verified
        intObj.swportmode = swportmode
        intObj.admindown = admindown

    def printInterfaceObject(intObj):
        print({'hostname':intObj.hostname,'interface':intObj.interface,'description':intObj.description, 'verified': intObj.verified, 'switchportMode': intObj.swportmode, 'adminDown': intObj.admindown})


for intf_obj in parse.find_objects('^interface'):

    currentHostname = parse.re_match_iter_typed(r'^hostname\s+(\S+)',default='')
    currentInterface = (intf_obj.text)

    currentDescription = ''
    switchportMode = ''
    
    for c_obj in intf_obj.children:
        childobject = (str(c_obj.text))
        # print(childobject)

        if childobject.find("description") == 1:
            currentDescription = childobject
        else:
            pass

        if childobject.find("switchport mode access") == 1:
            switchportMode = 'access'
        elif childobject.find("switchport mode trunk") == 1:
            switchportMode = 'trunk'
        else:
            pass

        if childobject.find("shutdown") == 1:
            adminDown = 'Administratively Down'
        elif childobject.find("switchport mode trunk") == 1:
            adminDown = 'Not Administratively Down'
        else:
            pass

        dateVerified = datetime.datetime.now()
        # dateVerified = ''

    currentIntObj = interfaceObject(currentHostname, currentInterface, currentDescription, dateVerified, switchportMode, adminDown)
    currentIntObj.printInterfaceObject()