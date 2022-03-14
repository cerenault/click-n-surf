from tokenize import String
from pydantic import BaseModel


class Spot(BaseModel):
    name: str
    region: str
    link: str
    latitude: str
    longitude: str
