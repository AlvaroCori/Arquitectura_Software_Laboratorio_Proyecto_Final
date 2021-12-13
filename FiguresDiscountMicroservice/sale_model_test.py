from Models.sale_model import SaleModel

import unittest


class TestSaleController(unittest.TestCase):
    def test_create_sale_model(self):
        total = 10
        level_discount = "medio"
        discount = 5
        sale = SaleModel(total=total, level_discount=level_discount, discount=discount)
        self.assertEqual(sale.discount,discount)
        self.assertEqual(sale.level_discount,level_discount)
        self.assertEqual(sale.total,total)

    def test_create_sale_model_dictionary(self):
        total = 10
        level_discount = "medio"
        discount = 5
        sale = SaleModel(total=total, level_discount=level_discount, discount=discount)
        dictionary = sale.to_dictionary()
        self.assertEqual(sale.discount,dictionary["discount"])
        self.assertEqual(sale.level_discount,dictionary["levelDiscount"])
        self.assertEqual(sale.total,dictionary["total"])


if __name__ == '__main__':
    unittest.main()