module.exports = class FigureModel {
    constructor(id, name,price,quantity,image) {
      this.id = id || 0;
      this.name = name || "";
      this.price = price || 0.0;
      this.quantity = quantity || 0; 
      this.image = image || "";
    }
}