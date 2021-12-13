from abc import ABC, abstractmethod
class I_bridge_sale(ABC):
    @abstractmethod
    def calculate_sale(self,elements):
        pass