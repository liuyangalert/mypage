/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
var text = /^[A-z\u4E00-\u9FA5]+$/;
var num = /[0-9]+/;
var cityflag = false;
var airflag = false;
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value; //获取城市名字
	if(!text.test(city)){
		alert("请输入中英文字符");
		city.value = "";
	}
	else{
		cityflag = true;
	}
	var air =document.getElementById("aqi-value-input").value;//获取空气值
	if(!num.test(air)){
		alert("请输入数字");
		air.value = "";
	}
	else{
		airflag = true;
	}
	if(airflag && cityflag){
			aqiData[city] = air;
	}

 }
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var list = document.getElementById("aqi-table");
	var str = "";
	var head = "<tr><th>"+"序号"+"</th><th>"+"城市"+"</th><th>"+"空气质量"+"</th><th>"+"操作"+"</th>";
	var x=0;
	for(i in aqiData){
		str = str+"<tr><td>"+x+"</td><td>"+i+"</td><td>"+aqiData[i]+"</td><td>"+"<button onclick='delBtnHandle(\""+i+"\")'>删除</button>"+"</td></tr>";
		x++;
	}
		//	str = head + "<tr><td>"+aqiData[0]+"</td><td>"+aqiData[1]+"</td><td>"+"删除"+"</td>";
	list.innerHTML = head+str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(x) {
  // do sth.
	delete aqiData[x];
  renderAqiList();
}

function init() {
	var handle = document.getElementById("add-btn");
	handle.onclick = function(){
		addBtnHandle();
	}
	  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}
window.onload = init;
//init();
