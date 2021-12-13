using System;
using FiguresModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace SalesService.Services
{
    public interface ISaleService
    {
        Task<string> GetSales(ICollection<SaleModel> sales);
    }
}