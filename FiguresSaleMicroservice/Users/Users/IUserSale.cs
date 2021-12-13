using FiguresModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Users.Users
{
    public interface IUserSale
    {
        Task<string> PostSalesAsync(ICollection<SaleModel> sales);
    }
}