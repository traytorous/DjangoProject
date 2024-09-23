from rest_framework import serializers
from .models import CollectionData


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollectionData
        fields = ['id','collection_name','created_at',
                'updated_at','latest_version','download_count'
                 ]
        