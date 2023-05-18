import uvicorn
from fastapi import FastAPI

app = FastAPI()

#select
#insert
#update
#delete
#transaction

#delete and update have where conditions.



@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=2000)