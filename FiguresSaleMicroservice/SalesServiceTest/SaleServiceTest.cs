using System;
using Xunit;
using System.Collections.Generic;
using System.Threading.Tasks;
using SalesService.Services;
using FiguresModels.Models;
namespace SalesServiceTest
{
    public class SaleServiceTest
    {
        [Fact]
        public void CreateSaleServiceTest()
        {
            UserSaleMock mock = new UserSaleMock(); 
            ISaleService service = new SaleService(mock);
            Assert.IsType<SaleService>(service);
        }
        [Fact]
        public async Task SaleServiceGetSalesTest()
        {
            UserSaleMock mock = new UserSaleMock(); 
            ISaleService service = new SaleService(mock);
            ICollection<SaleModel> sales = new List<SaleModel>();
            sales.Add(new SaleModel(){Key = "prueba1",Price = 1});
            sales.Add(new SaleModel(){Key = "prueba2",Price = 1});
            string result = await service.GetSales(sales);
            string expect = "prueba1-prueba2-";
            Assert.Equal(expect,result);
        }
    }
}
