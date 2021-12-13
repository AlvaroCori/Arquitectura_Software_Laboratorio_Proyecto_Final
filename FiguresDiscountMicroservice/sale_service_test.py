from Models.sale_model import SaleModel
from Services.sale_service import SaleService
from Models.unit_sale_model import UnitSaleModel
from mocks import RepositoryMock
from mocks import SaleMock
import unittest


class TestSaleController(unittest.TestCase):
    def test_create_sale_service(self):
        sale_service = SaleService(None,None,None)
        self.assertIs(type(sale_service), SaleService)
        
  
    def test_sale_service_unitary(self):
        sale_service = SaleService(RepositoryMock(),SaleMock("unitary"),SaleMock("group"))
        result = sale_service.calculate_sale("unitary",[])
        expected = SaleModel(0,"unitary",0)
        self.assertEqual(expected.discount,result.discount)
        self.assertEqual(expected.level_discount,result.level_discount)
        self.assertEqual(expected.total,result.total)

    def test_sale_service_group(self):
        sale_service = SaleService(RepositoryMock(),SaleMock("unitary"),SaleMock("group"))
        result = sale_service.calculate_sale("group",[])
        expected = SaleModel(0,"group",0)
        self.assertEqual(expected.discount,result.discount)
        self.assertEqual(expected.level_discount,result.level_discount)
        self.assertEqual(expected.total,result.total)
    

    def test_sale_service_group(self):
        sale_service = SaleService(RepositoryMock(),SaleMock("unitary"),SaleMock("group"))
        results = sale_service.to_units([{"Key":"usuario_prueba","Price":200},{"Key":"usuario_prueba","Price":200}])
        for result in results:
            self.assertIs(type(result), UnitSaleModel)
            self.assertEqual(result.key,"usuario_prueba")
            self.assertEqual(result.price,200)


if __name__ == '__main__':
        unittest.main()