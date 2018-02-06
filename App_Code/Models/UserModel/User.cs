using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[PetaPoco.TableName("User")]
[PetaPoco.PrimaryKey("Id")]
public class User : Model<User>
{
    public User()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public int Id { get; set; }
    public string Name { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public int Status { get; set; }
    public int PermissionLevel { get; set; }
    public UserStep userStep { get; set; }



}