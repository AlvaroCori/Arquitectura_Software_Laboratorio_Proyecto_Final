using FiguresSalesAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FiguresSalesAPI.Users
{
    public interface IUserSale
    {
        Task<string> PostSalesAsync(ICollection<SaleModel> sales);
    }
}