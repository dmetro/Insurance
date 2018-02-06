using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

[RoutePrefix("api/product")]
public class ProductController : ApiController
{
    [HttpPost]
    [Route("getproducts")]
    public IHttpActionResult GetProducts(GenObj obj)
    {
        try
        {
            var wait = Helper.Delay(2000);
            //var sp = StoreItem.GetItemStoreProcedure();
            //var items = StoreItem.GetItemsLazyLoading(obj.Skip, obj.Take);
            List<StoreItem> items = new List<StoreItem>();
            for (int i = 0; i < 3; i++)
            {
                StoreItem sti = new StoreItem();
                sti.Color = 1;
                sti.Description = i + " Description Description Description";
                sti.Id = i;
                sti.Name = "Name " + i;
                sti.Price = 90 * i;
                sti.Pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLto1NKBd8N--_2SRzNup0qNI6Z3if070KCbj_zmrm16IWJota";
                items.Add(sti);
            }
            return Ok(new { Error = "", data = items });
        }
        catch (Exception exs)
        {
            return InternalServerError(new Exception(exs.Message + "getproducts"));
        }
    }
}
