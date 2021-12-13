from sale_controller import SaleController

import unittest


class TestSaleController(unittest.TestCase):
    def test_create_sale_controller(self):
        controller = SaleController()
        self.assertIs(type(controller), SaleController)
        


if __name__ == '__main__':
    unittest.main()