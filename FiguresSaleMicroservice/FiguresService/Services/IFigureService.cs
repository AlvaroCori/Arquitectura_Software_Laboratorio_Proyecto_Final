using System;
using FiguresModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace FiguresService.Services
{
    public interface IFigureService
    {
        Task<string> GetSalesAsync(ICollection<FigureModel> figures);
    }
}