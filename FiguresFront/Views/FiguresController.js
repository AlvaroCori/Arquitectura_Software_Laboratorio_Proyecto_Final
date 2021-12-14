function loadSale(sale)
{
    let id_camp = sale.id;
    let price_camp = sale.price;
    let quantity_camp = sale.quantity;
    let user_camp = sale.user;

    var data = {
        id: id_camp,
        price: price_camp,
        quantity: quantity_camp,
        user : user_camp
    };
    return data
}
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
    getFigure(figure,addList)
    {
        this.element = this.createElement('div');
        this.element.classList.add("figure-style");
        this.element.classList.add("col-6");
        this.image = this.createElement('img')
        this.image.src = figure.image
        this.name = this.createElement('p')
        this.name.textContent = "Nombre :"+figure.name
        this.price = this.createElement('p')
        this.price.textContent = "Precio :"+ figure.price.toString() 
        this.quantity = this.createElement('p')
        this.quantity.textContent = "Cantidad :"+figure.quantity.toString() 
        this.user = this.createElement('p')
        this.user.textContent = "Usuario :"+figure.user.toString() 
        this.button = this.createElement('button')
        this.button.addEventListener("click", addList);
        this.button.textContent = "AGREGAR"
        this.element.append(this.image)
        this.element.append(this.name)
        this.element.append(this.price)
        this.element.append(this.quantity)
        this.element.append(this.user)
        this.element.append(this.button)
        return this.element
    }
    printFigures(figures,addList)
    {
        this.app = this.getElement('#container-figures')
        figures.forEach(figure => {
            this.app.append(this.getFigure(figure,addList))
        });
    }
    getSale(sale)
    {
        this.element = this.createElement('div');
        this.element.classList.add("sale-style");
        this.content = this.createElement('p');
        this.content.textContent = "nombre : "+sale.name + " precio: "+sale.price+" cantidad: "+sale.quantity+" usuario: "+sale.user;
        this.element.append(this.content);
        return this.element;
    }
    printSales(sales)
    {
        this.app = this.getElement('#figures-sale')
        sales.forEach(sale => {
            this.app.append(this.getSale(sale))
        });
    }
  }
  
  class FigureController {
    constructor(view) {
      
      this.models =  new Array();
      this.view = view;
    }
    addFigure(event)
    {
        console.log(sales);
    }
    async printFigures()
    {
        let results = await this.fetchFigures();
        let elements = this.getArrayOfModel(results);
        this.view.printFigures(elements,this.addFigure);
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
    async printSales(sales)
    {
        this.view.printSales(sales)
    }
    async postDiscount(event)
    {
        
        let datas = [];
        event.preventDefault();

        sales.forEach(sale => {
            datas.push(loadSale(sale));
        });
        let url = `${saleUrl}/api/figures`;
        async function getDiscount(response)
        {
            let data = await response.json();
            const discount = JSON.stringify(data);
            alert(discount);
        }
        console.log(JSON.stringify(datas));
        let object = fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(datas)
        }).then(response => {
            if(response.status === 201){
                getDiscount(response);
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

app.printFigures()

var sales = []

sales.push(new FigureModel(1,"Tanque De Asedio - Starcraft II",200,2,"https://m.media-amazon.com/images/I/51dWKLmiuSL._AC_.jpg",	"admin"));
sales.push(sale_example = new FigureModel(1,"Tanque De Asedio - Starcraft II",200,2,"https://m.media-amazon.com/images/I/51dWKLmiuSL._AC_.jpg",	"gem"));
sales.push(new FigureModel(2,	"Rambo - Rambo II",	400,4,	"https://m.media-amazon.com/images/I/41NTwikBZCL._AC_.jpg",	"admin"));
app.printSales(sales);

document.getElementById("figure-form").addEventListener('submit', app.postDiscount);
