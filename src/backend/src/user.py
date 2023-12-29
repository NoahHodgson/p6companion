class User:
    def __init__(self, name, characters):
        self.name = name
        self.characters = []
    
    def addCharacter(self, character):
        self.characters.append(character)

    def deleteCharacter(self, characterName):
        pass

    def editCharacter(self, characterName):
        pass
    
    