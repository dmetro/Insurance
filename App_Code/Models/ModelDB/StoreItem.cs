using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[PetaPoco.TableName("StoreItem")]
[PetaPoco.PrimaryKey("Id")]
public class StoreItem: Model<StoreItem>
{
    public StoreItem()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public int Id { get; set; }
    public string Name { get; set; }
    public int Price { get; set; }
    public int Status { get; set; }
    public int Type { get; set; }
    public int Color { get; set; }
    public int Size { get; set; }
    public string Description { get; set; }

    [PetaPoco.Ignore]
    public string Pic { get; set; }

    public static List<StoreItem> GetItemsLazyLoading(int skip, int take)
    {
        try
        {
            using (var connection = Connection.Create())
            {
                return connection.Fetch<StoreItem>("where Id > @0 and Id <= @1", skip, take+skip);
            }
        }
        catch (Exception)
        {
            return null;
        }
    }

    public static List<StoreItem> GetItemStoreProcedure()
    {
        try
        {
            using (var connection = Connection.Create())
            {
                var dd = connection.Fetch<StoreItem>("exec sp_getAllStoreItem");
                return dd;
            }
        }
        catch (Exception)
        {
            return null;
        }
    }

    //public static List<SupplierAvailable> GetSupplierAvailable(PostSupplier req, PetaPoco.Database useConnection = null)
    //{
    //    try
    //    {
    //        using (var connection = Connection.Create(useConnection))
    //        {
    //            return connection.Fetch<SupplierAvailable>("where Date >= @0 and ProductId = @1 and Status = @2", req.Date, req.ProductId, 1);
    //        }
    //    }
    //    catch (Exception)
    //    {
    //        return null;
    //    }

    //}

    //public static List<SupplierAvailable> GetBySubCategoryId(int subCategoryId)
    //{
    //    try
    //    {
    //        using (var connection = Connection.Create())
    //        {
    //            return connection.Fetch<SupplierAvailable>(@"SELECT DISTINCT SupplierAvailable.SupplierId
    //                                                          FROM SupplierAvailable LEFT OUTER JOIN
    //                                                         SubProduct ON SubProduct.SupplierId = SupplierAvailable.SupplierId INNER JOIN
    //                                                         SubCategorySubProduct ON SubCategorySubProduct.SubProductId = SubProduct.SubProductId
    //                                                            WHERE (SubCategorySubProduct.SubCategoryId = @0) AND (SupplierAvailable.Status = 1)", subCategoryId);
    //        }
    //    }
    //    catch (Exception e)
    //    {
    //        return null;
    //    }

    //}

    //public static EndUser GetUser(EndUser user)
    //{
    //    string password = Helper.CalculateMD5Hash(user.Password);
    //    using (var connection = Connection.Create())
    //    {
    //        return connection.SingleOrDefault<EndUser>("where Email = @0 and Password = @1", user.Email, password);
    //    }
    //}
}