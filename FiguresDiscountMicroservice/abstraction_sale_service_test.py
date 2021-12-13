from Services.abstraction_sale_service import AbstractionSaleService
import unittest


class TestSaleController(unittest.TestCase):
    def test_create_abstraction_sale_service(self):
        abstraction_sale_service = AbstractionSaleService(None)
        self.assertIs(type(abstraction_sale_service), AbstractionSaleService)
        
    def test_abstraction_sale_service_realice_sale(self):
        abstraction_sale_service = AbstractionSaleService(None)
        expected = 0
        result = abstraction_sale_service.calculate_sale(None,None)
        self.assertEqual(expected,result)
if __name__ == '__main__':
    unittest.main()