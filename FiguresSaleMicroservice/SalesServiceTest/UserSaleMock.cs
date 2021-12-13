using System;
using Users.Users;
using FiguresModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace SalesServiceTest
{
    public class UserSaleMock : IUserSale
    {

        public Task<string> PostSalesAsync(ICollection<SaleModel> sales)
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
