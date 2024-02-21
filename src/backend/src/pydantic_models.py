from pydantic import BaseModel

class CharacterBase(BaseModel):
    name: str
    lore: str

class CharacterCreate(CharacterBase):
    pass

class Character(CharacterBase):
    id: int
    player_id: int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    name: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    is_active: bool
    characters: list = []

    class Config:
        orm_mode = True
