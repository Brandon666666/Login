function go() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    if (x == "xxx" && y == "666") {
        confirm("即将进入天猫官网首页！");
        window.open("https://jx.tmall.com/");
    } else if (x == "" && y != "") {
        alert("用户名不能为空！");
    } else if (x != "" && y == "") {
        alert("密码不能为空！");
    } else if (x == "" && y == "") {
        alert("请输入用户名和密码！");
    } else if (x != "xxx" || y != "666") {
        alert("用户名或密码输入错误！");
    }
}