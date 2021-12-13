import unittest
from Services.unitary_sale import UnitarySale
from Models.unit_sale_model import UnitSaleModel

class TestUnitSale(unittest.TestCase):
    def test_unit_sale_two_units(self):
        unitary_sale = UnitarySale()
        sales = []
        for _ in range(2):
            sales.append(UnitSaleModel(key="admin",price=200))
        expected = "ninguno"
        result = unitary_sale.calculate_sale(sales)
        self.assertEqual(expected,result)

    def test_create_sale_four_units(self):
        unitary_sale = UnitarySale()
        sales = []
        for _ in range(4):
            sales.append(UnitSaleModel(key="admin",price=200))
        expected = "bajo"
        result = unitary_sale.calculate_sale(sales)
        self.assertEqual(expected,result)

if __name__ == '__main__':
    unittest.main()