import requests
from flask import Flask, request, jsonify
from Services.sale_service import sale_service
from Models.sale_model import sale_model
class sale_controller:
    def __init__(self):
        self.sale_service = sale_service()
        self.app = Flask(__name__)

        @self.app.get("/figures")
        def get_figures():
            return jsonify(self.countries)


        @self.app.post("/unitary")
        def unitary_sales():
            return self.__post_sale(request,"unitary")

        @self.app.post("/group")
        def group_sales():
            return self.__post_sale(request,"group")

    
    def __post_sale(self,request,type_sale):
        elements = request.get_json()
        print(elements)
        sale = self.sale_service.calculate_sale(type_sale,elements)
        return sale.to_dict(), 201

    def init(self):
        if __name__ == "__main__":
            self.app.run(port=5006)
controller = sale_controller()
controller.init()


#factory method
#bridge method