from Services.Repository.repository import Repository

import unittest


class TestSaleController(unittest.TestCase):
    def test_create_repository(self):
        repository = Repository()
        self.assertIs(type(repository), Repository)

    def test_create_repository_get_none_discount(self):
        repository = Repository()
        result = repository.get_discount("ninguno")
        expected = 0
        self.assertEqual(expected, result)
        
    def test_create_repository_get_low_discount(self):
        repository = Repository()
        result = repository.get_discount("bajo")
        expected = 5
        self.assertEqual(expected, result)

    def test_create_repository_get_middle_discount(self):
        repository = Repository()
        result = repository.get_discount("medio")
        expected = 10
        self.assertEqual(expected, result)

        

if __name__ == '__main__':
    unittest.main()