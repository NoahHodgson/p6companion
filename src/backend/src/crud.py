from sqlalchemy.orm import Session
import models, schemas

'''
    Create methods
'''
def create_user(db: Session, user: schemas.UserCreate):
    new_user = models.User(name = user.name, characters = [])
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def create_char(db: Session, user_id: int, char: schemas.CharacterCreate):
    new_char = models.Character(**char.model_dump(), user_id=user_id)
    db.add(new_char)
    db.commit()
    db.refresh(new_char)
    return new_char

'''
    Read methods
'''
def get_user_by_id(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_name(db: Session, name: str):
    return db.query(models.User).filter(models.User.name == name).first()

def get_char(db: Session, user_name: str, char_name: str):
    return db.query(models.Character).filter(models.User.name == user_name).filter(models.Character.name == char_name).first()

'''
    Update methods
'''

'''
    Delete methods
'''
