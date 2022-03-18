import json
from fastapi.testclient import TestClient

from main import app

client = TestClient(app)

data = {
    "name": "Spot",
    "region": "REGION",
    "link": "test.spot.fr",
    "latitude": "44.0085201",
    "longitude": "-1.25384519"
}


def test_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello world, welcome fastapi !"}


def test_create_spot():
    response = client.post("/spot", json=data)
    assert response.status_code == 200
    assert response.json() == data


def test_get_one_spot():
    response = client.get("/spot/Spot")
    assert response.status_code == 200
    assert response.json() == data


def test_get_spots_by_region():
    response = client.get("/spots/regions?region=REGION")
    assert response.status_code == 200
    assert data in response.json()


def test_delet_one_spot():
    response = client.delete("/spot/Spot", json={"name": "Spot"})
    assert response.status_code == 200
