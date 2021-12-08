module.exports = class FigureModel {
    constructor(id, name, price) {
      this.Id = id || 0;
      this.Name = name || "";
      this.Price = price || "";
    }
}