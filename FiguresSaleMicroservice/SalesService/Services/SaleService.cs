using System;
using FiguresModels.Models;
using System.Collections.Generic;
using Users.Users;
using System.Threading.Tasks;
namespace SalesService.Services
{
    public class SaleService:ISaleService
    {
        private IUserSale _user;
        public SaleService(IUserSale user)
        {
            _user = user;
        }
        public async Task<string> GetSales(ICollection<SaleModel> sales)
        {
            return await _user.PostSalesAsync(sales);
        }
    }
}