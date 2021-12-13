using System;
using FiguresRepository.Data.Repositories;
using FiguresRepository.Data.Entities;
using FiguresModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresServiceTest
{
    public class FigureRepositoryMock : IFigureRepository
    {
        public ICollection<SaleModel> SaleEntityToModel(ICollection<SaleEntity> sales)
        {
            ICollection<SaleModel> salesModel = new List<SaleModel>();
            foreach (SaleEntity sale in sales)
            {
                salesModel.Add(new SaleModel(){Key=sale.Key,Price=sale.Price});
            }
            return salesModel;
        }
        public ICollection<SaleEntity> SaleModelToEntity(ICollection<SaleModel> sales)
        {
            ICollection<SaleEntity> salesEntity = new List<SaleEntity>();
            foreach (SaleModel sale in sales)
            {
                salesEntity.Add(new SaleEntity(){Key=sale.Key,Price=sale.Price});
            }
            return salesEntity;
        }
        public Task<string> GetSalesAsync(ICollection<SaleEntity> sales)
        {
            float total = 0;
            foreach (SaleEntity sale in sales)
            {
                total = total + sale.Price;
            }
            var result = Task.Run(() =>
            {
                return total.ToString()+"%";
            });
            return result; 
        }
    }
}
