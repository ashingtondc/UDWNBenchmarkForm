import json
import csv

obj = {"words": []}

with open('words.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        obj['words'].append(row)
    
with open('words.json', "w") as words:
    json.dump(obj, words)