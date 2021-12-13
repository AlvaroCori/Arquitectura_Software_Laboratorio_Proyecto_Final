from .Irepository import IRepository

class Repository(IRepository):
    def __init__(self):
        self.__discounts= dict()
        self.__discounts["ninguno"] = 0
        self.__discounts["bajo"] = 5
        self.__discounts["medio"] = 10
    def get_discount(self,key):
        return self.__discounts[key]
