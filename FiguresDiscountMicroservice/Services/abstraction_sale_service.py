from .Repository.repository import Repository
from .unitary_sale import UnitarySale
from .group_sale import GroupSale

class AbstractionSaleService:
    def __init__(self, repository = Repository(),unitary = UnitarySale(), group = GroupSale()):
        self._repository = repository
        self._unitary = unitary
        self._group = group
    def calculate_sale(self,type_sale, elements):
        return 0
