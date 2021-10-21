import pymongo

db_client = pymongo.MongoClient("mongodb+srv://admin:BFGDRtoQhnOsgzqZ@cluster0.0xmnc.mongodb.net/?ssl=true&ssl_cert_reqs=CERT_NONE")
db = db_client.test
collection = db.submissions

res = collection.insert_one({"test2":"test2"})
print(res.acknowledged)