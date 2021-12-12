using System;
using FiguresSalesAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresSalesAPI.Services
{
    public interface ISaleService
    {
        Task<string> GetSales(ICollection<SaleModel> sales);
    }
}