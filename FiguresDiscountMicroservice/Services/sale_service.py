from Models.sale_model import SaleModel
from Models.unit_sale_model import UnitSaleModel
from .abstraction_sale_service import AbstractionSaleService
from .unitary_sale import UnitarySale
from .group_sale import GroupSale

class SaleService(AbstractionSaleService):

    def __init__(self):
        self.__unitary = UnitarySale()
        self.__group = GroupSale()
        AbstractionSaleService.__init__(self)
        
    def to_units(self,elements):
        units = []
        for element in elements:
            units.append(UnitSaleModel(element["Key"],element["Price"]))
        return units

    def __get_total(self,units):
        total = 0
        for unit in units:
            total = total + unit.price
        return total
    
    def __calculate_total_discount(self,total_price,total_discount):
        return total_price - (total_price * total_discount/100)


    def calculate_sale(self,type_sale, elements):
        units = self.to_units(elements)
        level = "ninguno"
        if (type_sale=="unitary"):
            level = self.__unitary.calculate_sale(units)
        else:
            level = self.__group.calculate_sale(units)

        total_price = self.__get_total(units)
        discount_percentaje = self._repository.get_discount(level)
        total_discount = self.__calculate_total_discount(total_price, discount_percentaje)
        return SaleModel(total = total_price,level_discount=level,discount=total_discount)

