from .bridge_sale import IBridgeSale

class UnitarySale(IBridgeSale):

    def calculate_sale(self,units):
        counter = len(units)
        level = "ninguno"
        if (counter>=4):
            level = "bajo"
        else:
            level = "ninguno"
        return level
    