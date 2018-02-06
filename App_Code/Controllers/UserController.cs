using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

[RoutePrefix("api/user")]
public class UserController : ApiController
{
    [HttpPost]
    [Route("login")]
    public IHttpActionResult Login([FromBody] dynamic obj)
    {
        
        if (obj.userName != "")
        {
            //sda
            return Ok(new { Error = "", data = obj });
        }
        else
        {
            return Ok(new { Error = "User not exist", data = "" });
        }
    }

    [HttpPost]
    [Route("register")]
    public async Task<IHttpActionResult> Register([FromBody] dynamic user)
    {
        var d = await Helper.DelayAsync(2000);
        return Ok(new { Error = "", data = user });
    }

    [HttpGet]
    [Route("favorite/{userId}")]
    public IHttpActionResult GetFavorite(int userId)
    {
        //var us = userId;
        return Ok(new { Error = "", data = "" });
    }


    //[HttpPost]
    //[Route("login")]
    //public IHttpActionResult setStep([FromBody]  )
    //{

    //    if (obj.userName != "")
    //    {
    //        //sda
    //        return Ok(new { Error = "", data = obj });
    //    }
    //    else
    //    {
    //        return Ok(new { Error = "User not exist", data = "" });
    //    }
    //}
}