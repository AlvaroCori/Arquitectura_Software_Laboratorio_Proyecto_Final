using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FiguresSalesAPI.Models;
using FiguresSalesAPI.Services;
namespace FiguresSalesAPI.Controllers
{
    [Route("api/[controller]")]
    public class FiguresController : ControllerBase
    {
        private IFigureService _service;
        public FiguresController()
        {
            _service = new FigureService();
        }
        [HttpPost]
        public async Task<ActionResult<string>> GetDiscountAsync([FromBody] ICollection<FigureModel> figures)
        {
            var sales = await _service.GetSalesAsync(figures);
            return Created($"/api/sales/",sales);
        }
    }
}