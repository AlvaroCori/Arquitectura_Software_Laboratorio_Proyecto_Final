using System;
using Xunit;
using FiguresModels.Models;
using FiguresService.Services;
using FiguresController.Controllers;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text;
namespace FiguresControllerTest
{
    public class UnitTest1
    {
        [Fact]
        public void CreateFiguresControllerTest()
        {
            FigureServiceMock mock = new FigureServiceMock();
            FigureController controller = new FigureController(mock);
            Assert.IsType<FigureController>(controller);
        }
        [Fact]
        public async Task FiguresControllerObtainDiscountTest()
        {
            FigureServiceMock mock = new FigureServiceMock();
            FigureController controller = new FigureController(mock);
            ICollection<FigureModel> figures = new List<FigureModel>();
            
            figures.Add(new FigureModel(){Id=1,User = "Usuario prueba" , Quantity= 2, Price = (float)(10)});
            figures.Add(new FigureModel(){Id=1,User = "Usuario prueba" , Quantity= 1, Price = (float)(5)});
            var result = await controller.ObtainDiscountAsync(figures);
            Assert.IsType<ActionResult<string>>(result);
        }
    }
}
