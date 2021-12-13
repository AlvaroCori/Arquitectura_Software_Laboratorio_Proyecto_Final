using System;
using FiguresModels.Models;
using FiguresService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace FiguresControllerTest
{
    public class FigureServiceMock : IFigureService
    {
        public Task<string> GetSalesAsync(ICollection<FigureModel> figures)
        {
            long total = 0;
            foreach (FigureModel figure in figures)
            {
                total = total + figure.Quantity;
            }
            var result = Task.Run(() =>
            {
                return total.ToString()+" figuras";
            });
            return result;
        }
    }
}
