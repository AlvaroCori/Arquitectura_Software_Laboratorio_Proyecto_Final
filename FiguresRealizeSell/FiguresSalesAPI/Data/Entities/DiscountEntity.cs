
using System;

namespace FiguresSalesAPI.Data.Entities
{
    public class DiscountEntity
    {
        public float Discount {get; set;}
        public string LevelDiscount {get; set;}
        public long Total {get;set;}
    }
}