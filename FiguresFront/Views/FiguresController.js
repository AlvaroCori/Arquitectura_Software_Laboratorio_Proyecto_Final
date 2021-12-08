class FigureModel {
    constructor(id, name,price,quantity,image) {
        this.id = id || 0;
        this.name = name || "";
        this.price = price || 0.0;
        this.quantity = quantity || 0; 
        this.image = image || "";
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
        figures.forEach(figure => {
            this.app.append(this.getFigure(figure))
        });
    }
  }
  
  class FigureController {
    constructor(models, view) {
      this.models = models
      this.view = view
    }
    createFigure(model) {    
        this.models.push(model)
    }
    printFigures()
    {
        this.view.printFigures(this.models)
    }
    postFigure(event)
    {
        event.preventDefault();
        let url = `${baseUrl}/figures`;

        const formData = new FormData();
        let name = event.currentTarget.name.value;
        let price = event.currentTarget.price.value;
        let quantity = event.currentTarget.quantity.value;
        let image = event.currentTarget.image.value;
        formData.append('name', name);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('image', image);
        /*
        fetch(url, {
            method: 'POST',
            headers: { 
            "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
            },
            body: formData
        }).then(response => {
            if(response.status === 201){
                alert('Se creo una nueva marca.');
                location.reload();
            } else {
                response.text()
                .then((error)=>{
                    alert(error);
                });
            }
        });
        */
    }
  }

const baseUrl = "http://localhost:5050"
const app = new FigureController([], new FigureView())
app.createFigure(new FigureModel(1,"Tanque De Asedio - Starcraft II",200.50,30,"https://m.media-amazon.com/images/I/51dWKLmiuSL._AC_.jpg"))
app.createFigure(new FigureModel(2,'Rambo - Rambo II',400,10, "https://m.media-amazon.com/images/I/41NTwikBZCL._AC_.jpg"))
app.printFigures()

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
