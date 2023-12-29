class Character:
    def __init__(self):
        self.name = ""
        self.classType = ""
        self.level = 1
        self. stats = {
            "brawn": 0,
            "intel": 0,
            "swift": 0,
            "charm": 0,
            "armor": 0,
            "dodge": 0
        }
        self.skills = []
        self.inventory = []
        self.lore = ""
    
    def setName(self, name):
        self.name = name
    
    def setClass(self, newClass):
        self.classType = newClass
    
    def setLevel(self, newLevel):
        self.level = newLevel
    
    def setStats(self, newStats):
        self.stats["brawn"] = newStats["brawn"]
        self.stats["intel"] = newStats["intel"]
        self.stats["swift"] = newStats["swift"]
        self.stats["charm"] = newStats["charm"]
        self.stats["armor"] = newStats["armor"]
        self.stats["dodge"] = newStats["dodge"]
    
    def addSkill(self, newSkill):
        self.skills.append(newSkill)
    
    def addItem(self, newItem):
        self.inventory.append(newItem)
    
    def setLore(self, newLore):
        self.lore = newLore

