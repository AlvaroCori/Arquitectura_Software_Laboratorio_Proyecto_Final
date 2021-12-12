using System;
using FiguresSalesAPI.Models;
using FiguresSalesAPI.Data.Repositories;
using FiguresSalesAPI.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresSalesAPI.Services
{
    public class FigureService : IFigureService
    {
        private FiguresRepository _repository;
        public FigureService()
        {
            _repository = new FiguresRepository();
        }
        public async Task<string> GetSalesAsync(ICollection<FigureModel> figures)
        {
            ICollection<SaleEntity> salesEntity = new List<SaleEntity>();
            foreach (FigureModel figure in figures)
            {
                for (long unit =0; unit < figure.Quantity;unit = unit + 1)
                    salesEntity.Add(new SaleEntity(){Key=figure.User,Price=figure.Price});
            }
            string discount = await _repository.GetSalesAsync(salesEntity);
            ICollection<SaleModel> sales = _repository.SaleEntityToModel(salesEntity);
            return discount;
        }
    }
}