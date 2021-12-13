using System;
using Xunit;
using FiguresModels.Models;
namespace FiguresModelsTest
{
    public class SaleModelTest
    {
        [Fact]
        public void SaleModelFieldsTest()
        {
            var key = "Usuario prueba";
            var price = (float)(60.5);
            SaleModel sale = new SaleModel(){Key=key, Price=price};
            Assert.Equal(sale.Key, key);
            Assert.Equal(sale.Price, price);
        }
    }
}
