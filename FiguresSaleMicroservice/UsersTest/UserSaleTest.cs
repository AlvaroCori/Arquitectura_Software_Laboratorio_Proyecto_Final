using System;
using Xunit;
using Users.Users;
namespace UsersTest
{
    public class UserSaleTest
    {
        [Fact]
        public void CreateUserSale()
        {
            IUserSale user = new UserSale();
            Assert.IsType<UserSale>(user);
        }
    }
}
