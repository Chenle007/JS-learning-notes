
//自定义byClassName方法
function elementsByClassName(node, classStr){
    //获取node节点下所以子节点
    var nodes = node.getElementsByTagName("*");
    var arr = []; // 存放符合条件的节点
    for(var i = 0; i < nodes.length; i++){
        if (nodes[i].className === classStr){
            arr.push(nodes[i]);
        }
    }
    return arr;
}

//跨浏览器兼容，获取当前有效样式
function getStyle(node, cssStyle){
    //IE ： 火狐 谷歌
    return node.currentstyle ? node.currentstyle[cssStyle] : getComputedStyle(node)[cssStyle];
}

//使时间是个位数时前面加个 0
function doubleNum(n){
    if (n < 10){
        return "0" + n;
    }else {
        return n;
    }
}

//自定义当前时间
function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;  // 0~11
    var date = d.getDate();

    var week = d.getDay(); // 0~6 0代表星期天
    week = numOfChinese(week);

    var hour = d.getHours();
    var min = doubleNum(d.getMinutes());
    var sec = doubleNum(d.getSeconds());

    var str = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + "：" + min + "：" + sec;
    return str;
}
//星期几的数字转成中文
function numOfChinese(num){
    var arr = ["日","一","二","三","四","五","六"];
    return arr[num];
}
