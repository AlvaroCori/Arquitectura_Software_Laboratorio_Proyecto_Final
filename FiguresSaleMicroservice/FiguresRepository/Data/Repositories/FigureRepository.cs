using System;
using FiguresModels.Models;
using FiguresRepository.Data.Entities;
using SalesService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FiguresRepository.Data.Repositories
{
    public class FigureRepository : IFigureRepository
    {
        private ISaleService _saleService; 
        public FigureRepository(ISaleService saleService = null)
        {
            _saleService = saleService;
        }
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
        public async Task<string> GetSalesAsync(ICollection<SaleEntity> sales)
        {
            ICollection<SaleModel> salesModel = SaleEntityToModel(sales);
            string discount = await _saleService.GetSales(salesModel);
            return discount; 
        }
    }
}