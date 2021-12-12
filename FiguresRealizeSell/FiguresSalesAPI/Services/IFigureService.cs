using System;
using FiguresSalesAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresSalesAPI.Services
{
    public interface IFigureService
    {
        Task<string> GetSalesAsync(ICollection<FigureModel> figures);
    }
}