from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id   = Column(Integer, primary_key=True)
    name = Column(String, unique=True, index=True)
    is_active = Column(Boolean, default=True)
    
    characters = relationship("Character", back_populates="user")

class Character(Base):
    __tablename__ = "characters"

    id        = Column(Integer, primary_key=True)
    name      = Column(String, index=True)
    lore      = Column(String)

    brawn     = Column(Integer)
    intellect = Column(Integer)
    swift     = Column(Integer)
    charisma  = Column(Integer)

    user_id = Column(Integer, ForeignKey("users.id"))
    
    user = relationship("User", back_populates="characters")
