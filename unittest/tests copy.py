from django.test import TestCase
from .models import Employee

class EmployeeModelTests(TestCase):
    def setUp(self):
        # Create employees
        self.ceo = Employee.objects.create(fname="Heather", lname="Bond")
        self.manager = Employee.objects.create(fname="Gordon", lname="Wilson")
        self.developer1 = Employee.objects.create(fname="Liam", lname="Rees")
        self.developer2 = Employee.objects.create(fname="Grace", lname="White")
        
        # Set up relationships
        self.manager.supervisors.add(self.ceo)  # CEO supervises manager
        self.developer1.supervisors.add(self.manager)  # Manager supervises developer1
        self.developer2.supervisors.add(self.manager)  # Manager supervises developer2

    
    # 1) Verify creation of employees
    def test_employee_creation(self):
        # Verify creation of employees
        self.assertEqual(self.ceo.fname, "Heather")
        self.assertEqual(self.ceo.lname, "Bond")

        self.assertEqual(self.manager.fname, "Gordon")
        self.assertEqual(self.manager.lname, "Wilson")

        self.assertEqual(self.developer1.fname, "Liam")
        self.assertEqual(self.developer1.lname, "Rees")

        self.assertEqual(self.developer2.fname, "Grace")
        self.assertEqual(self.developer2.lname, "White")
        
    # 2) Verify the correct supervisor-subordinate relationships
    
        
    # 3) Verify the string representation of employees
    
       
    # 4) Verify ordering by last name
    
        
    # 5) Test the count of subordinates
    
        
    # 6) Test employee supervisors count
    

    # 7) Test for deletion of supervisor and how it affect subordinates
    
        

    # 8) Test for capability to add multiple supervisors
    
   
    # 9) Test to remove the relationship
    
   
    # 10) Test for self-referential relationship
    
   
    # 11) Test for empty relationship
    
    





