using System;
using Xunit;
using FiguresModels.Models;
namespace FiguresModelsTest
{
    public class FigureModelTest
    {
        [Fact]
        public void FigureModelFieldsTest()
        {
            var id = 1;
            var user = "Usuario prueba";
            var quantity = 4;
            var price = (float)(60.5);

            FigureModel figure = new FigureModel(){Id=id,User = user , Quantity= quantity, Price = price};
            Assert.Equal(figure.Id, id);
            Assert.Equal(figure.User, user);
            Assert.Equal(figure.Quantity, quantity);
            Assert.Equal(figure.Price, price);
        }
    }
}