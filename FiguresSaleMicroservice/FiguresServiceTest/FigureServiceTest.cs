using System;
using Xunit;
using System.Collections.Generic;
using System.Threading.Tasks;
using FiguresService.Services;
using FiguresModels.Models;
namespace FiguresServiceTest
{
    
    public class FigureServiceTest
    {
        [Fact]
        public void CreateFigureService()
        {
            FigureRepositoryMock mock = new FigureRepositoryMock();
            IFigureService service = new FigureService(mock);
            Assert.IsType<FigureService>(service);
        }
        [Fact]
        public async Task FigureService()
        {
            FigureRepositoryMock mock = new FigureRepositoryMock();
            IFigureService service = new FigureService(mock);
            ICollection<FigureModel> figures = new List<FigureModel>();
            
            figures.Add(new FigureModel(){Id=1,User = "Usuario prueba" , Quantity= 2, Price = (float)(10)});
            figures.Add(new FigureModel(){Id=1,User = "Usuario prueba" , Quantity= 1, Price = (float)(5)});

            var result = await service.GetSalesAsync(figures);
            Assert.Equal(result, "25%");
        }

    }
}
