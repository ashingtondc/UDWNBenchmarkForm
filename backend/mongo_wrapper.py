import pymongo
from bson import ObjectId

class Entry():
    db_client = pymongo.MongoClient("mongodb+srv://admin:BFGDRtoQhnOsgzqZ@cluster0.0xmnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 27017)
    collection = db_client["submissions"]

    def upload_data(self, data):
        return self.collection.insert_one(data)