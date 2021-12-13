class SaleModel:
    def __init__(self,total=0,level_discount = "ninguno",discount=0):
        self.discount = discount
        self.level_discount = level_discount
        self.total = total
    def to_dict(self):
        sale_dictionary = dict()
        sale_dictionary["discount"] = self.discount
        sale_dictionary["levelDiscount"] = self.level_discount
        sale_dictionary["total"] = self.total
        return sale_dictionary