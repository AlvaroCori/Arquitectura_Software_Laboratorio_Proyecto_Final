using System;
using FiguresSalesAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Net;


namespace FiguresSalesAPI.Users
{
    public class UserSale : IUserSale
    {
        private static readonly HttpClient client = new HttpClient();
        public UserSale()
        {
        }
        public async Task<string> PostSalesAsync(ICollection<SaleModel> sales)
        {
           
            var json = JsonSerializer.Serialize(sales);
            var data = new StringContent(json, Encoding.UTF8, "application/json");

            string url = "http://127.0.0.1:5006/unitary";
            using var client = new HttpClient();

            var response = await client.PostAsync(url, data);

            string result = response.Content.ReadAsStringAsync().Result;

            return result;
        }

    }
}