from django.db import models

# -----------------------------------------------------------------
# Recursive m2m
# ------------------------------------------------------------------

class Employee(models.Model):
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=25)
    supervisors = models.ManyToManyField("Employee", related_name="subordinates")

    class Meta:
        ordering = ["lname"]

    def __str__(self):
        return f"Employee: {self.lname}, {self.fname}"
    
    def get_hierarchy(self):
        hierarchy = {"name": {self}, "subordinates": []}
        for subordinate in self.subordinates.all():
            hierarchy["subordinates"].append(subordinate.get_hierarchy())
        return hierarchy
    
    
    




