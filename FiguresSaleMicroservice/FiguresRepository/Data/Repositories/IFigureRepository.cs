using System;
using FiguresModels.Models;
using FiguresRepository.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FiguresRepository.Data.Repositories
{
    public interface IFigureRepository
    {
        ICollection<SaleModel> SaleEntityToModel(ICollection<SaleEntity> sales);
        ICollection<SaleEntity> SaleModelToEntity(ICollection<SaleModel> sales);
        Task<string> GetSalesAsync(ICollection<SaleEntity> sales);
    }
}
