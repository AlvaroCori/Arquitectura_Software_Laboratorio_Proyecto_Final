using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FiguresModels.Models;
using FiguresService.Services;
namespace FiguresController.Controllers
{
    [Route("api/figures")]
    public class FigureController : ControllerBase
    {
        private IFigureService _service;
        public FigureController(IFigureService service)
        {
            _service = service;
        }
        [HttpPost]
        public async Task<ActionResult<string>> ObtainDiscountAsync([FromBody] ICollection<FigureModel> figures)
        {
            var sales = await _service.GetSalesAsync(figures);
            return Created($"/api/sales/",sales);
        }
    }
}