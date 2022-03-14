from dataclasses import dataclass
import os
from model import Spot
# MongoDB driver
import motor.motor_asyncio

#MONGO_URL = os.environ.get("MONGODB_URL")
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://db-clicknsurf")

db = client.surf_spots
collection = db.spots


async def fetch_all_spots():
    spots = []
    cursor = collection.find({})
    async for data in cursor:
        spots.append(Spot(**data))
    return spots


async def fetch_spots_by_region(region):
    # TO DO Verifier la sensibilité à la casse
    spots = []
    cursor = collection.find({"region": region})
    async for data in cursor:
        spots.append(Spot(**data))
    return spots


async def fetch_one_spot(name):
    doc = await collection.find_one({"name": name})
    return doc


async def create_spot(spot):
    doc = spot
    result = await collection.insert_one(doc)
    return doc
