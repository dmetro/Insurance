using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for UserStep
/// </summary>
public class UserStep : Model<UserStep>
{
    public int UserId { get; set; }
    public bool PersonalInfo1 { get; set; }
    public bool PersonalInfo2 { get; set; }
    public bool ChooseProduct { get; set; }
    public bool ProductFields { get; set; }
    public bool ProdcutHealt { get; set; }
    public bool ProductSignature { get; set; }
    public bool IdUploaded { get; set; }
    public bool ProcessFinished { get; set; }

}