/**
 * Created by asus1 on 2015/9/7.
 */
var xmlHttp

function doclick(str)
{
    xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
        alert ("ä¯ÀÀÆ÷²»Ö§³Ö")
        return
    }

    var url="resultbiology.html"
    url=url+"?q="+str
    url=url+"&sid="+Math.random()
    xmlHttp.onreadystatechange=stateChanged
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
}

function stateChanged()
{
    if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {
        document.getElementById("txtHint").innerHTML=xmlHttp.responseText
    }
}

function GetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}