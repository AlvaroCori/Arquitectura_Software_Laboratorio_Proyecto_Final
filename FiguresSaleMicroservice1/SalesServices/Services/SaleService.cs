using System;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresSalesAPI.Services
{
    public class SaleService:ISaleService
    {
        private IUserSale _user;
        public SaleService()
        {
            _user = new UserSale();
        }
        public async Task<string> GetSales(ICollection<SaleModel> sales)
        {
            return await _user.PostSalesAsync(sales);
        }
    }
}