using System;
using FiguresModels.Models;
using SalesService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresRepositoryTest 
{
    public class SaleServiceMock : ISaleService
    {
        public Task<string> GetSales(ICollection<SaleModel> sales)
        {
            string elements = "";
            foreach(SaleModel sale in sales)
            {
                elements = elements + sale.Key+"-";
            }
            var result = Task.Run(() =>
            {
                return elements;
            });
            return result;
        }
    }
}
