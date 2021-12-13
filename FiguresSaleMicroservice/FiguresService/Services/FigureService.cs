using System;
using FiguresModels.Models;
using FiguresRepository.Data.Repositories;
using FiguresRepository.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresService.Services
{
    public class FigureService : IFigureService
    {
        private IFigureRepository _repository;
        public FigureService(IFigureRepository repository)
        {
            _repository = repository;
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
            return discount;
        }
    }
}