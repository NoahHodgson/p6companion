from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import crud, pydantic_models, sql_models

sql_models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    except:
        print("failed to get db...")
    finally:
        db.close()

@app.post("/users/", response_model=pydantic_models.User)
def create_user(user: pydantic_models.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, name = user.name)
    if db_user:
        raise HTTPException(status_code=400, detail="username already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/{user_name}", response_model=pydantic_models.User)
def read_user(user_name: str, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_name)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
