from typing import List
from pydantic import BaseModel

class CharacterBase(BaseModel):
    name: str
    lore: str

    brawn:     int
    intellect: int
    swift:     int
    charisma:  int

class CharacterCreate(CharacterBase):
    pass

class Character(CharacterBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    name: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    is_active: bool
    characters: List[Character] = []

    class Config:
        orm_mode = True
