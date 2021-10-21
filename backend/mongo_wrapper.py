import pymongo
from bson import ObjectId

class Entry():
    db_client = pymongo.MongoClient("mongodb+srv://admin:BFGDRtoQhnOsgzqZ@cluster0.0xmnc.mongodb.net/?ssl=true&ssl_cert_reqs=CERT_NONE")
    db = db_client.test
    collection = db.submissions

    def upload_data(self, data):
        res = self.collection.insert_one(data)
        return res.acknowledged