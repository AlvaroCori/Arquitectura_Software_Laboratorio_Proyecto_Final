using System;
using FiguresSalesAPI.Models;
using FiguresSalesAPI.Data.Entities;
using FiguresSalesAPI.Data.Repositories;
using FiguresSalesAPI.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FiguresSalesAPI.Data.Repositories
{
    public class FiguresRepository
    {
        private ISaleService _saleService; 
        public FiguresRepository()
        {
            _saleService = new SaleService(); 
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