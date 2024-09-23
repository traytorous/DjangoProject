from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import CollectionData
from rest_framework.response import Response
 

@api_view(['GET'])
def getAllCollections(request):
    output = [
    {
        "collection_name": output.collection_name,
        "created_at":output.created_at,
        "updated_at": output.updated_at,
        "latest_version": output.latest_version,
        "download_count": output.download_count
    } 
    for output in CollectionData.objects.all()
    ]
    return Response(output)

@api_view(['GET'])
def getSingleCollection(request,colName):
    try:
       singleCollection = CollectionData.objects.get(collection_name=colName)
    except CollectionData.DoesNotExist:
        return Response(status=404)
    output = {
        "collection_name": singleCollection.collection_name,
        "created_at":singleCollection.created_at,
        "updated_at": singleCollection.updated_at,
        "latest_version": singleCollection.latest_version,
        "download_count": singleCollection.download_count
        }
    
    return Response(output)
