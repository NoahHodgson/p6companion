import json

def loadSkills():
    with open("../skilldata.json") as skillData:
        skills = json.load(skillData)
    
    return skills

def loadUser(userName):
    pass

def loadCharacter(characterName):
    pass

