/**
 * Created by hll on 2017/11/26.
 */
//��ȡdom����
var v1=document.getElementById('v1');
var v2=document.getElementById('v2');
var v3=document.getElementById('v3');
var btn=document.getElementById('btn');
//����site.css�ļ�
require('../statics/index.css')

//es6
//import addObj from './calc.js'   //���ܷ��ں�������Ҫ��������
btn.onclick=function(){
    var v1val=parseFloat(v1.value);
    var v2val=parseFloat(v2.value);
    //����add����
    var add=require('./calc.js');   //es5
    v3.value=add(v1val,v2val)
    //v3.value=addObj.add(v1val,v2val)  //es6
}
//��ȡcalc.js�ķ������ҵ���