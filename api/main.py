from typing import List
from model import Spot
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from database import (
    fetch_all_spots,
    fetch_spots_by_region,
    fetch_one_spot,
    create_spot,
    remove_spot,
)

app = FastAPI()

origin = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello world, welcome fastapi !"}


@app.get("/spots", response_model=List[Spot])
async def get_spots():
    response = await fetch_all_spots()
    if response:
        return response
    raise HTTPException(400, "Error")


@app.get("/spot/{name}", response_model=Spot)
async def get_spots(name):
    response = await fetch_one_spot(name)
    if response:
        return response
    raise HTTPException(404, "There is no spot with this name {name}")


@app.get("/spots/regions", response_model=List[Spot])
async def get_spots_by_region(region):
    response = await fetch_spots_by_region(region)
    if response:
        return response
    raise HTTPException(404, "There is no spot in region {region}")


@app.post("/spot", response_model=Spot)
async def post_spot(spot: Spot):
    response = await create_spot(spot.dict())
    if response:
        return response
    raise HTTPException(400, "Something it's wrong, BAD request ")

if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port="8000", reload=True)


@app.delete("/spot/{name}")
async def delete_spot(name):
    response = await remove_spot(name)
    if response:
        return "response"
    raise HTTPException(400, "Can't delete there is no spot {name}")
