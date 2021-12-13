from .Repository.repository import Repository

class AbstractionSaleService:
    def __init__(self, repository = Repository()):
        self._repository = repository
    def realize_sale(self,type_sale, elements):
        return 0
