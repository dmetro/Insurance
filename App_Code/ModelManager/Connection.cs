using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Connection
/// </summary>
public class Connection
{
    public static PetaPoco.Database Create()
    {
        return new PetaPoco.Database("myConnectionString");
    }
}