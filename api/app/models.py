from django.db import models

class CollectionData(models.Model):
    id = models.BigAutoField(primary_key=True)
    collection_name = models.CharField(max_length=200)
    created_at = models.CharField(max_length=200)
    updated_at = models.CharField(max_length=200)
    latest_version  = models.CharField(max_length=200)
    download_count = models.IntegerField()
    
    def __str__(self):
        return "collection_name: {}, created_at: {} ,updated_at: {}, latest_version: {}, download_count: {}".format(
            self.collection_name,
            self.created_at,
            self.updated_at,
            self.latest_version,
            self.download_count
            )