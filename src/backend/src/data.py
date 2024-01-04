import json

def initMainSkills():
    with open("../data/mainSkills.json") as skillData:
        skills = json.load(skillData)
    
    return skills

def getMainSkill(skills, name):
    for key, value in skills.items():
        for i in value:
            if i["name"] == name:
                return i
    
    return False


def loadUser(userName):
    pass

def loadCharacter(characterName):
    pass

