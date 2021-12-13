using System;
using Xunit;
using FiguresRepository.Data.Entities;
namespace FiguresRepositoryTest
{
    
    public class SaleEntityTest
    {
        [Fact]
        public void SaleEntityFieldsTest()
        {
            var key = "Usuario prueba";
            var price = (float)(60.5);
            SaleEntity sale = new SaleEntity(){Key=key, Price=price};
            Assert.Equal(sale.Key, key);
            Assert.Equal(sale.Price, price);
        }
    }
}
