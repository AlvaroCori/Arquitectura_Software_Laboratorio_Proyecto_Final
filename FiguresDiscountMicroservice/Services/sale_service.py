from Models.sale_model import sale_model
from Models.unit_sale_model import unit_sale_model
from .abstraction_sale import abstraction_sale_service
from .unitary_sale import unitary_sale
from .group_sale import group_sale

class sale_service(abstraction_sale_service):

    def __init__(self):
        self.__unitary = unitary_sale()
        self.__group = group_sale()
        abstraction_sale_service.__init__(self)
        
    def to_units(self,elements):
        units = []
        for element in elements:
            units.append(unit_sale_model(element["Key"],element["Price"]))
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
        discount_percentaje = self.repository.get_discount(level)
        total_discount = self.__calculate_total_discount(total_price, discount_percentaje)
        return sale_model(total = total_price,level_discount=level,discount=total_discount)

