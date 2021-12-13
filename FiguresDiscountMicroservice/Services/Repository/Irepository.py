from abc import ABC, abstractmethod

class IRepository(ABC):
    @abstractmethod
    def get_discount(self,key):
        pass
    