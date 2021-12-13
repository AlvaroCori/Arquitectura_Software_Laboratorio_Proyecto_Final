class FigureModel {
    constructor(id, name,price,quantity,image,user) {
        this.id = id || 0;
        this.name = name || "";
        this.price = price || 0.0;
        this.quantity = quantity || 0; 
        this.image = image || "";
        this.user = user || "";
      }
}
  class FigureView {
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }
    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }
    constructor() {}
    getFigure(figure)
    {
        this.element = this.createElement('div')
        this.image = this.createElement('img')
        this.image.src = figure.image
        this.name = this.createElement('p')
        this.name.textContent = "Nombre :"+figure.name
        this.price = this.createElement('p')
        this.price.textContent = "Precio :"+ figure.price.toString() 
        this.quantity = this.createElement('p')
        this.quantity.textContent = "Cantidad :"+figure.quantity.toString() 
        
        this.element.append(this.image)
        this.element.append(this.name)
        this.element.append(this.price)
        this.element.append(this.quantity)
        return this.element
    }

    printFigures(figures)
    {
        this.app = this.getElement('#container-figures')
        console.log(figures)
        figures.forEach(figure => {
            this.app.append(this.getFigure(figure))
        });
    }
  }
  
  class FigureController {
    constructor(view) {
      
      this.models =  new Array();
      this.view = view;
    }

    async printFigures()
    {
        let results = await this.fetchFigures();
        let elements = this.getArrayOfModel(results);
        this.view.printFigures(elements);
        this.models = elements;
    }
    async fetchFigures(){
        const url = `${baseUrl}/figures`;
        let response = await fetch(url);
        try{
            if(response.status == 200){
                let data = await response.json();
                return data;
            } else {
                var errorText = await response.text();
                alert(errorText);
            }
        } catch(error){
            var errorText = await error.text();
            alert(errorText);
        }
        return [];
    }
    getArrayOfModel(figures)
    {
        var elements = new Array(); 
        let index = 0;
        let limit = 0;
        
        for(index=0, limit=figures.length; index < limit; index++){
            let figure = figures[index];
            let model = new FigureModel(figure["id"],figure["name"],figure["price"],figure["quantity"],figure["image"],figure["user"]);
            elements.push(model);
        }
        return elements;
    }

    async postFigure(event)
    {
        event.preventDefault();
        let url = `${saleUrl}/api/figures`;
        let id_camp = "1";
        //event.currentTarget.name.value;
        let price_camp = "200";//event.currentTarget.price.value;
        let quantity_camp = "2";//event.currentTarget.quantity.value;
        let user_camp = "admin";

        var data = {
            id: id_camp,
            price: price_camp,
            quantity: quantity_camp,
            user : user_camp
        };
        async function alertDiscount(response)
        {
            let data = await response.json();
            alert(JSON.stringify(data));
        }
        let object = fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify([data])
        }).then(response => {
            if(response.status === 201){
                alertDiscount(response)
            } else {
                response.text()
                .then((error)=>{
                    alert(error);
                });
            }
        });
    }
  }

const baseUrl = "http://localhost:5050"
const saleUrl = "http://localhost:5000"
const app = new FigureController(new FigureView())

//app.printFigures()


document.getElementById("figure-form").addEventListener('submit', app.postFigure);


//ar FigureModel = load("../Models/FigureModel")
//const FigureModel = require('../Models/FigureModel');
/*
require('../Models/FigureModel')
alert("ssssssss")
var figure = new FigureModel(0,"ww");

const baseRawUrl = 'http://localhost:3030';
const baseUrl = `${baseRawUrl}/api`;
function redirectToMain()
{
    window.location.href = 'figures.html';
}
function getFigures()
{  
    return [figure];
    const url = `${baseUrl}/${id}`;
    fetch(url,{
        headers: { 
               "Content-Type": "application/json; charset=utf-8",
        },
        method: 'GET'
    })
    .then((response) => { 
        return response.json();
    })
}
function drawFigures()
{
    figures = getFigures()
}
drawFigures()

//window.addEventListener('DOMContentLoaded', async function(event){
//});*/
