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

    def test_employee_relationships(self):
        # Verify the correct supervisor-subordinate relationships
        self.assertIn(self.ceo, self.manager.supervisors.all())
        self.assertIn(self.manager, self.developer1.supervisors.all())
        self.assertIn(self.manager, self.developer2.supervisors.all())

        # Verify the correct subordinate relationships
        self.assertIn(self.developer1, self.manager.subordinates.all())
        self.assertIn(self.developer2, self.manager.subordinates.all())
        self.assertNotIn(self.developer1, self.ceo.subordinates.all())
        self.assertNotIn(self.developer2, self.ceo.subordinates.all())

    def test_employee_str_method(self):
        # Verify the string representation of employees
        self.assertEqual(str(self.ceo), "Employee: Bond, Heather")
        self.assertEqual(str(self.manager), "Employee: Wilson, Gordon")
        self.assertEqual(str(self.developer1), "Employee: Rees, Liam")
        self.assertEqual(str(self.developer2), "Employee: White, Grace")

    def test_employee_ordering(self):
        # Verify ordering by last name
        employees = Employee.objects.all()
        expected_order = [self.ceo, self.developer1, self.developer2, self.manager]
        self.assertEqual(list(employees), expected_order)

    def test_employee_subordinates_count(self):
        # Test the count of subordinates
        self.assertEqual(self.ceo.subordinates.count(), 1)  # CEO has 1 direct subordinate
        self.assertEqual(self.manager.subordinates.count(), 2)  # Manager has two subordinates
        self.assertEqual(self.developer1.subordinates.count(), 0)  # Developer1 has no subordinates
        self.assertEqual(self.developer2.subordinates.count(), 0)  # Developer2 has no subordinates

    def test_employee_supervisors_count(self):
        self.assertEqual(self.ceo.supervisors.count(), 0) #CEO has no supervisors
        self.assertEqual(self.manager.supervisors.count(), 1) # Manager has 1 supervisor
        self.assertEqual(self.developer1.supervisors.count(), 1) # Developer 1 has 1 supervisor
        self.assertEqual(self.developer2.supervisors.count(), 1)  # Developer 2 has 1 supervisor

    # Test for deletion of supervisor and how it affect subordinates
    def test_supervisor_deletion(self):
        # Verify initial relationships
        self.assertIn(self.manager, self.developer1.supervisors.all())
        self.assertIn(self.manager, self.developer2.supervisors.all())
        
        # Delete the manager
        self.manager.delete()
        
        # Refresh the instances from the database
        self.developer1.refresh_from_db()
        self.developer2.refresh_from_db()

        # Check that the manager is no longer in the supervisors of developers
        self.assertNotIn(self.manager, self.developer1.supervisors.all())
        self.assertNotIn(self.manager, self.developer2.supervisors.all())
        
        # Check that the deleted manager no longer exists in the database
        with self.assertRaises(Employee.DoesNotExist):
            Employee.objects.get(pk=self.manager.pk)

    # Test for capability to add multiple supervisors
    def test_add_multiple_supervisors(self):
        # self.developer1.supervisors.add(self.ceo, self.manager)
        self.developer1.supervisors.add(self.ceo)
        self.assertIn(self.ceo, self.developer1.supervisors.all())
        self.assertIn(self.manager, self.developer1.supervisors.all())

    # Test to remove the relationship
    def test_clear_supervisors(self):
        # self.developer1.supervisors.add(self.manager)
        self.developer1.supervisors.clear()  # Removes all supervisors from developer1
        self.assertEqual(self.developer1.supervisors.count(), 0)

    # Test for self-referential
    def test_self_referential_relationship(self):
        # Add self as a supervisor
        self.developer1.supervisors.add(self.developer1)
        self.assertIn(self.developer1, self.developer1.supervisors.all())

    # Test for empty relationship
    def test_empty_relationships(self):
        new_employee = Employee.objects.create(fname="Howard", lname="Beale")
        self.assertEqual(new_employee.supervisors.count(), 0)
        self.assertEqual(new_employee.subordinates.count(), 0)





