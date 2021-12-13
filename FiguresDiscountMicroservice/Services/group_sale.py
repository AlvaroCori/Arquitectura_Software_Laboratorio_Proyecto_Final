from .bridge_sale import IBridgeSale
from Models.unit_sale_model import UnitSaleModel
class GroupSale(IBridgeSale):

    def __get_keys_quantity(self,units):
        keys = dict()
        for unit in units:
            if (unit.key not in keys):
                keys[unit.key] = 1
            else:
                keys[unit.key] = keys[unit.key] + 1
        return keys

    def __get_discount(self,keys):
        discount = "ninguno"
        for index in keys:
            if (keys[index] >= 4):
                discount = "medio"
                break
            else:
                discount = "bajo"
        return discount

    def calculate_sale(self,units):
        keys = self.__get_keys_quantity(units)
        level = self.__get_discount(keys)    
        return level