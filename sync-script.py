import requests

saved_data = []
with open('/partner-engineering/src/pe_tools/data/published_collections_data.csv', mode='r') as file:
        csvFile = csv.reader(file)
        for lines in csvFile:
                saved_data.append(lines)

#Send data to database using either post request or connecting directly to the database
