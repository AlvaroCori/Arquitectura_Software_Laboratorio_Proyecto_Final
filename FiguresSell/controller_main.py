import requests
from flask import Flask, request, jsonify
from Services.sale_service import sale_service
from Models.sale_model import sale_model
class sale_controller:
    def __init__(self):
        self.sale_service = sale_service()
        self.app = Flask(__name__)
        self.countries = [
            {"id": 1, "name": "Thailand", "capital": "Bangkok", "area": 513120},
            {"id": 2, "name": "Australia", "capital": "Canberra", "area": 7617930},
            {"id": 3, "name": "Egypt", "capital": "Cairo", "area": 1010408},
        ]
        @self.app.get("/figures")
        def get_figures():
            return jsonify(self.countries)


        @self.app.post("/unitary")
        def unitary_sales():
            return self.__post_sale(request,"unitary")

        @self.app.post("/group")
        def group_sales():
            return self.__post_sale(request,"group")

        @self.app.post("/countries")
        def add_country():
            if request.is_json:
                country = request.get_json()
                country["id"] = self._find_next_id()
                self.countries.append(country)
                return country, 201
            return {"error": "Request must be JSON"}, 415
    
    def _find_next_id(self):
        return max(country["id"] for country in self.countries) + 1

    def __post_sale(self,request,type_sale):
        elements = request.get_json()
        sale = self.sale_service.calculate_sale(type_sale,elements)
        return sale.to_dict(), 201

    def init(self):
        if __name__ == "__main__":
            self.app.run(port=5006)
controller = sale_controller()
controller.init()


#factory method
#bridge method