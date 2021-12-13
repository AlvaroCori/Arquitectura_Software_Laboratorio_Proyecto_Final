from .Repository.repository import repository

class abstraction_sale_service:
    def __init__(self, rep = repository()):
        self.repository = rep
    def realize_sale(self,type_sale, elements):
        return 0
