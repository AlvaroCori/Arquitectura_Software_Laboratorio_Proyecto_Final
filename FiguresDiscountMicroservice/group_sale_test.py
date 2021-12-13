import unittest
from Services.group_sale import GroupSale
from Models.unit_sale_model import UnitSaleModel

class TestGroupSale(unittest.TestCase):
    def test_unit_sale_four_units_with_same_key(self):
        group_sale = GroupSale()
        sales = []
        for _ in range(4):
            sales.append(UnitSaleModel(key="admin",price=200))
        expected = "medio"
        result = group_sale.calculate_sale(sales)
        self.assertEqual(expected,result)

    def test_unit_sale_two_units_with_same_key(self):
        group_sale = GroupSale()
        sales = []
        for admin_index in range(2):
            sales.append(UnitSaleModel(key=f"admin",price=200))
        expected = "bajo"
        result = group_sale.calculate_sale(sales)
        self.assertEqual(expected,result)  

    def test_unit_sale_four_units_with_diferent_key(self):
        group_sale = GroupSale()
        sales = []
        for admin_index in range(8):
            sales.append(UnitSaleModel(key=f"admin_{admin_index}",price=200))
        expected = "bajo"
        result = group_sale.calculate_sale(sales)
        self.assertEqual(expected,result)


if __name__ == '__main__':
    unittest.main()