from typing import List
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import crud, models, schemas

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

'''
    User related methods
'''
@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_name(db, name = user.name)
    if db_user:
        raise HTTPException(status_code=400, detail="username already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_id(db, user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.delete("/users/{user_id}", response_model=schemas.UserDelete)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = read_user(user_id, db)
    return crud.delete_user(db = db, user = db_user)

'''
    Character related methods
'''
@app.post("/users/{user_id}/characters/", response_model=schemas.Character)
def create_char(user_id: int, 
                char: schemas.CharacterCreate, 
                db: Session = Depends(get_db)):
    return crud.create_char(db = db, user_id = user_id, char = char)

@app.get("/users/{user_id}/characters/{char_name}", response_model=schemas.Character)
def read_char(user_id: str, char_name: str, db: Session = Depends(get_db)):
    db_char = crud.get_char(db, user_id, char_name)
    if db_char is None:
        raise HTTPException(status_code=404, detail=f"Char not found: /users/{user_id}/characters/{char_name}")
    return db_char

@app.delete("/users/{user_id}/characters/{char_name}", response_model=schemas.CharacterDelete)
def delete_char(user_id: int, char_name: str, db: Session = Depends(get_db)):
    db_user = read_user(user_id = user_id, db = db)
    db_char = read_char(db_user.id, char_name = char_name, db = db)
    return crud.delete_char(db = db, char = db_char)
