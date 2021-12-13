from .Irepository import Irepository

class repository(Irepository):
    def __init__(self):
        self.discounts= dict()
        self.discounts["ninguno"] = 0
        self.discounts["bajo"] = 5
        self.discounts["medio"] = 10
    def get_discount(self,key):
        return self.discounts[key]
