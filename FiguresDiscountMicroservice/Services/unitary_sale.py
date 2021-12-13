from .bridge_sale import I_bridge_sale
from Models.sale_model import sale_model

class unitary_sale(I_bridge_sale):


    def calculate_sale(self,units):
        counter = len(units)
        level = "ninguno"
        if (counter>=4):
            level = "bajo"
        else:
            level = "ninguno"
        return level
    