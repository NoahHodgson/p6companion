from sqlalchemy.orm import Session
import sql_models, pydantic_models

def get_user(db: Session, name: str):
    return db.query(sql_models.User).filter(sql_models.User.name == name).first()

def create_user(db: Session, user: pydantic_models.UserCreate):
    new_user = sql_models.User(name = user.name, characters = [])
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


