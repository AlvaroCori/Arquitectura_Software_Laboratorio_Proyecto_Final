from .bridge_sale import IBridgeSale

class GroupSale(IBridgeSale):

    def __get_keys(self,units):
        keys = dict()
        for u in units:
            if (u not in keys):
                keys[u.key] = 0
            else:
                keys[u.key] = keys[u.key] + 1
        return keys

    def __get_discount(self,keys):
        discount = "ninguno"
        for index in keys:
            if (keys[index]>3):
                discount = "medio"
                break
            else:
                discount = "bajo"
        return discount

    def calculate_sale(self,units):
        keys = self.__get_keys(units)
        level = self.__get_discount(keys)    
        return level