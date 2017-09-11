# jQuery设计思想
## 目录
1. 选择网页元素
2. 改变结果集
3. 链式操作
4. 元素的操作
5. 工具的方法
6. 事件操作
7. 特殊效果
8. AJAX操作
9. 插件操作

## 正文
### 1.选择网页元素
```js
//css选择器
$(document) //选择文档对象
$('#myId') //选择ID元素
$('.myClss')//选择class元素
$('input[name=first]') //选择name=first的input元素
//特有表达式
$('a:first') //选择网页中第一个a元素
$('tr:odd') //表格奇数行
$('#myFrom:input') //选择表单中的input元素
$('div:visible') //选择可见元素
$('div:gt(2)') //选择所有的div的元素，除了前三个
$('div:animated') //选择当前处于动画状态的div元素
```
### 2.改变结果集
```js
$('div').has('p'); //选择包含p元素的div元素
$('div').not('.myClass'); //选择不包含myClass的类
$('div').filter('.myClass'); //选择class等于myClass的；类
$('div').first(); //选择第1个div元素
$('div').eq(5); //选择第6个div元素
```
```js
$('div').next('p'); //选择div元素后面的第一个p元素
$('div').parent(); //选择div元素的父元素
$('div').closest('form'); //选择离div最近的那个form父元素
$('div').children(); //选择div的所有子元素
$('div').siblings(); //选择div的同级元素
```
### 3.链式操作
```js
$('div').find('h3').eq(2).html('hello');
```
```js
$('div').find('h3').eq(2).html('hello').end().eq(0).html('world');
```
### 4.元素操作
```js
$('h1').html(); //取值
$('h1').html('hello');//赋值
//text内容,attr属性，width宽度，height高度，val取表单元素的值
```
### 5.