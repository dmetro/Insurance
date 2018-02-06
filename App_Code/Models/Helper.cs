using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

/// <summary>
/// Summary description for Helper
/// </summary>
public class Helper
{
    public Helper()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public static bool Delay(int millisecond)
    {
        Stopwatch sw = new Stopwatch();
        sw.Start();
        bool flag = false;
        while (!flag)
        {
            if (sw.ElapsedMilliseconds > millisecond) flag = true;
        }
        sw.Stop();
        return true;
    }

    public async static Task<bool> DelayAsync(int millisecond)
    {
        Stopwatch sw = new Stopwatch();
        sw.Start();
        bool flag =  false;
        while (!flag)
        {
            if (sw.ElapsedMilliseconds > millisecond) flag = true;
        }
        sw.Stop();
        return true;
    }
}