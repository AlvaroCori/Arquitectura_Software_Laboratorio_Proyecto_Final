module.exports = class FigureModel {
    constructor(object) {
      this.id = object["id"];
      this.name = object["name"];
      this.quantity = object["quantity"];
      this.price = object["price"];
      this.image = object["image"];
      this.user = object["user"];
    }
}