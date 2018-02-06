using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;



public  abstract class Model<T>
{

    public static IEnumerable<T> GetAll()
    {
        try
        {
            using (var connection = Connection.Create())
                return connection.Fetch<T>("");
        }
        catch (Exception ex)
        {

            throw;
        }
      
    } 

    public static void Set(Model<T> model )
    {
        try
        {
            using (var connection = Connection.Create())
            {
                connection.Insert(model);
            }

        }
        catch (Exception ex )
        {

            throw;
        }
   
    }

    public static T GetById(int id)
    {
        using (var connection = new PetaPoco.Database("myConnectionString"))
            //connection.Delete<T>(id);
            return connection.SingleOrDefault<T>(id);
    }

    public static bool Edit(Model<T> model)
    {
        using (var connection = Connection.Create())
        {
            try
            {
                connection.Update(model);
                return true;
            }
            catch (Exception exs)
            {
                string message = exs.Message;
                return false;
            }
        }
    }

    //public static bool Delet(int id)
    //{
    //    using (var connection = new PetaPoco.Database("myConnectionString"))
    //        return connection.Query<T>("Select * from " + TableName + "");
    //}


}