from Services.Repository.Irepository import IRepository
from Services.bridge_sale import IBridgeSale
class RepositoryMock(IRepository): 
    def get_discount(self,key):
        return 10

class SaleMock(IBridgeSale):
    def __init__(self, discount):
        self.discount = discount

    def calculate_sale(self,elements):
        return self.discount 
