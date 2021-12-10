from abc import ABC, abstractmethod

class Irepository(ABC):
    @abstractmethod
    def get_discount(self,key):
        pass
    