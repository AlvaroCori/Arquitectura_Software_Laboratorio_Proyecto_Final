from Models.unit_sale_model import UnitSaleModel

import unittest


class TestUnitSaleModel(unittest.TestCase):
    def test_create_unit_sale_model(self):
        key = "usuario_prueba"
        price = 200
        sale = UnitSaleModel(key= key, price = price)
        self.assertEqual(sale.key , key)
        self.assertEqual(sale.price, price)



if __name__ == '__main__':
    unittest.main()