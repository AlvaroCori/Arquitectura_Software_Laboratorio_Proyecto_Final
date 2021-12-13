using System;
using Xunit;
using FiguresRepository.Data.Repositories;
using FiguresRepository.Data.Entities;
using FiguresModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresRepositoryTest
{
    public class UnitTest1
    {
        [Fact]
        public void CreateFigureRepository()
        {
            SaleServiceMock mock = new SaleServiceMock();
            IFigureRepository repository = new FigureRepository(mock);
            Assert.IsType<FigureRepository>(repository);
        }
        [Fact]
        public async Task FigureRepositoryGetSales()
        {
            SaleServiceMock mock = new SaleServiceMock();
            IFigureRepository repository = new FigureRepository(mock);
            ICollection<SaleEntity> sales = new List<SaleEntity>();
            sales.Add(new SaleEntity(){Key = "prueba1",Price = 1});
            sales.Add(new SaleEntity(){Key = "prueba2",Price = 1});
            string result = await repository.GetSalesAsync(sales);
            string expect = "prueba1-prueba2-";
            Assert.Equal(expect,result);
        }
        [Fact]
        public void FigureRepositorySaleEntitiesToModels()
        {
            SaleServiceMock mock = new SaleServiceMock();
            IFigureRepository repository = new FigureRepository(mock);
            ICollection<SaleEntity> sales = new List<SaleEntity>();
            sales.Add(new SaleEntity(){Key = "prueba1",Price = 1});
            sales.Add(new SaleEntity(){Key = "prueba2",Price = 1});
            var result = repository.SaleEntityToModel(sales);
            Assert.IsType<List<SaleModel>>(result);
        }
        [Fact]
        public void FigureRepositorySaleModelsToEntities()
        {
            SaleServiceMock mock = new SaleServiceMock();
            IFigureRepository repository = new FigureRepository(mock);
            ICollection<SaleModel> sales = new List<SaleModel>();
            sales.Add(new SaleModel(){Key = "prueba1",Price = 1});
            sales.Add(new SaleModel(){Key = "prueba2",Price = 1});
            var result = repository.SaleModelToEntity(sales);
            Assert.IsType<List<SaleEntity>>(result);
        }
    }
}
