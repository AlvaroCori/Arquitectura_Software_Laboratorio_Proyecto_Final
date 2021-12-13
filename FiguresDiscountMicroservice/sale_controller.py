import requests
from flask import Flask, request, jsonify
from Services.sale_service import SaleService
class SaleController:
    def __init__(self,sale_service = SaleService()):
        self.__sale_service = sale_service
        self.__app = Flask(__name__)

        @self.__app.get("/figures")
        def get_figures():
            return jsonify("Realice un post con /unitary o /group")


        @self.__app.post("/unitary")
        def unitary_sales():
            return self.__post_sale(request,"unitary")

        @self.__app.post("/group")
        def group_sales():
            return self.__post_sale(request,"group")


    def __post_sale(self,request,type_sale):
        elements = request.get_json()
        sale = self.__sale_service.calculate_sale(type_sale,elements)
        return sale.to_dictionary(), 201

    def run(self,port_app):
        if __name__ == "__main__":
            self.__app.run(port=port_app)
controller = SaleController()
controller.run(5006)