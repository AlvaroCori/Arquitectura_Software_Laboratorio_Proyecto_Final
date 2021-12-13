from abc import ABC, abstractmethod
class IBridgeSale(ABC):
    @abstractmethod
    def calculate_sale(self,elements):
        pass