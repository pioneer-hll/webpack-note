/**
 * Created by hll on 2017/11/26.
 */
//获取dom对象
var v1=document.getElementById('v1');
var v2=document.getElementById('v2');
var v3=document.getElementById('v3');
var btn=document.getElementById('btn');
//导入site.css文件
require('../statics/index.css')

//es6
//import addObj from './calc.js'   //不能放在函数里面要放在外面
btn.onclick=function(){
    var v1val=parseFloat(v1.value);
    var v2val=parseFloat(v2.value);
    //调用add方法
    var add=require('./calc.js');   //es5
    v3.value=add(v1val,v2val)
    //v3.value=addObj.add(v1val,v2val)  //es6
}
//获取calc.js的方法并且调用