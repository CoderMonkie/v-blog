# 01-数组Array


<a name="nWswF"></a>
# 【JavaScript数据结构系列】01-数组Array

数组是JavaScript中最常用的数据结构，<br />在ES6之前也JS中也只有数组这一种数据结构，<br />ES6之后加入了Set和Map。

数组本身其实并不同于JS中的数组Array，<br />只是为了使用方便，JS封装的数组具有更多特性。

我们分以下及部分来讲：

- 原本的数组
- JS中的数组
  - ES5之前的数组
  - ES6之后的数组

---

<a name="RML8i"></a>
## Original Array

原始数组具有以下特点：

- 属于线性结构
- 固定的长度/容量
- 具有下标/索引

因此，数组具有以下优点：<br />

- 通过下标索引访问查找元素非常方便高效<br />
- 通过下标索引方便遍历元素
- 可以在任意位置插入删除元素

同样，数组也有相应的劣势：<br />

- 固定长度，不便于处理非定长数据<br />而数据一般都是动态的，需要手动扩容/缩容<br />
- 需要进行遍历才能通过元素进行查找<br />时间复杂度高<br />
- 插入删除元素时需要移动其它元素位置<br />增加删除元素效率低
- 只能存储一种数据类型

另外，数组可以是一维数组，也可以有二维数组，<br />也就是说，数组嵌套，元素也是数组。

---


<a name="f0G8p"></a>
## JS中的数组

JavaScript中提供了数组这种数据类型，不再需要我们自己封装。<br />JS中的Array不同于原始数组，不再是固定长度，你可以几乎无限的push进元素，因为它在底层实现上自动扩容的，让你感觉不到固定长度的限制。<br />另外，也可以存放不同类型的数据。

数组有length属性，提供了一系列操作数组数据的方法。<br />还有它的近亲，类数组（就是类似于数组的意思），同样具有length属性，但不具有Array.prototype上的方法，我们通常是通过改变this指向来借用数组的方法。

例如：

```javascript
function test() {
  var args = [].slice.call(arguments,0, arguments.length)
  console.log(args)
}
test(1,2,3,4)
// (4) [1, 2, 3, 4]
//		0: 1
//		1: 2
//		2: 3
//		3: 4
//		length: 4
//		__proto__: Array(0)
```
※新语法里可以将可迭代对象转为数组，获取数组更简便

> 你能不眨眼一口气说出 JavaScript 中数组的所有方法吗？


因ES6版本发生重大变化，所以分ES5之前跟ES6之后来说。

<a name="Oq9uj"></a>
### ES5之前常用的数组方法有：
| 方法 | 描述 |
| :--- | :--- |
| [concat()](https://www.w3school.com.cn/jsref/jsref_concat_array.asp) | 连接两个或更多的数组，并返回结果。 |
| [every()](https://www.runoob.com/jsref/jsref-every.html) | 检测数值元素的每个元素是否都符合条件。 |
| [filter()](https://www.runoob.com/jsref/jsref-filter.html) | 检测数值元素，并返回符合条件所有元素的数组。 |
| [forEach()](https://www.runoob.com/jsref/jsref-foreach.html) | 数组每个元素都执行一次回调函数。 |
| [indexOf()](https://www.runoob.com/jsref/jsref-indexof-array.html) | 搜索数组中的元素，并返回它所在的位置。 |
| [isArray()](https://www.runoob.com/jsref/jsref-isarray.html) | 判断对象是否为数组。 |
| [join()](https://www.runoob.com/jsref/jsref-join.html) | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 |
| [lastIndexOf()](https://www.runoob.com/jsref/jsref-lastindexof-array.html) | 搜索数组中的元素，并返回它最后出现的位置。 |
| [map()](https://www.runoob.com/jsref/jsref-map.html) | 通过指定函数处理数组的每个元素，并返回处理后的数组。 |
| [pop()](https://www.w3school.com.cn/jsref/jsref_pop.asp) | 删除并返回数组的最后一个元素 |
| [push()](https://www.w3school.com.cn/jsref/jsref_push.asp) | 向数组的末尾添加一个或更多元素，并返回新的长度。 |
| [reduce()](https://www.runoob.com/jsref/jsref-reduce.html) | 将数组元素计算为一个值（从左到右）。 |
| [reduceRight()](https://www.runoob.com/jsref/jsref-reduceright.html) | 将数组元素计算为一个值（从右到左）。 |
| [reverse()](https://www.w3school.com.cn/jsref/jsref_reverse.asp) | 颠倒数组中元素的顺序。 |
| [shift()](https://www.w3school.com.cn/jsref/jsref_shift.asp) | 删除并返回数组的第一个元素 |
| [slice()](https://www.w3school.com.cn/jsref/jsref_slice_array.asp) | 从某个已有的数组返回选定的元素 |
| [some()](https://www.runoob.com/jsref/jsref-some.html) | 检测数组元素中是否有元素符合指定条件。 |
| [sort()](https://www.w3school.com.cn/jsref/jsref_sort.asp) | 对数组的元素进行排序 |
| [splice()](https://www.w3school.com.cn/jsref/jsref_splice.asp) | 删除元素，并向数组添加新元素。 |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_array.asp) | 返回该对象的源代码。 |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_array.asp) | 把数组转换为字符串，并返回结果。 |
| [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString_array.asp) | 把数组转换为本地数组，并返回结果。 |
| [unshift()](https://www.w3school.com.cn/jsref/jsref_unshift.asp) | 向数组的开头添加一个或更多元素，并返回新的长度。 |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_array.asp) | 返回数组对象的原始值 |


*以上参考自：<br /> [[W3School](https://www.w3school.com.cn/jsref/jsref_obj_array.asp)]([https://www.w3school.com.cn/jsref/jsref_obj_array.asp](https://www.w3school.com.cn/jsref/jsref_obj_array.asp))<br /> [[菜鸟教程](https://www.runoob.com/jsref/jsref-obj-array.html)][https://www.runoob.com/jsref/jsref-obj-array.html](https://www.runoob.com/jsref/jsref-obj-array.html))

<a name="4JKVl"></a>
### ES6之后新增的数组方法有：
<a name="r6giR"></a>
#### 静态方法：
| 方法 | 描述 |
| :--- | :--- |
| [Array.from](http://es6.ruanyifeng.com/#docs/array#Array-from) | 可以将类数组对象(array-like object)或可迭代对象(iterable object)转为数组。 |
| [Array.of](http://es6.ruanyifeng.com/#docs/array#Array-of) | 将一组值转换为数组 |


<a name="Qw5Z4"></a>
#### 实例方法
| 方法 | 描述 |
| :--- | :--- |
| [copyWithin()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20copyWithin()) | 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。 |
| [find()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20find()%20%E5%92%8C%20findIndex()) | 找出第一个符合条件的数组成员。 |
| [findIndex()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20find()%20%E5%92%8C%20findIndex()) | 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。 |
| [fill()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20fill()) | 初始化一个用指定元素填充的新数组。 |
| [entries()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20entries()%EF%BC%8Ckeys()%20%E5%92%8C%20values()) | 用于数组遍历，返回键值对的遍历器对象。 |
| [keys()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20entries()%EF%BC%8Ckeys()%20%E5%92%8C%20values()) | 用于数组遍历，返回键的遍历器对象。 |
| [values()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20entries()%EF%BC%8Ckeys()%20%E5%92%8C%20values()) | 用于数组遍历，返回值的遍历器对象。 |
| [includes()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20includes()) | 判断数组是否包含指定的值，返回布尔值结果。 |
| [flat()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20flat()%EF%BC%8CflatMap()) | 将二维数组变为一维数组（即嵌套多层时只能减少一层）。 |
| [flatMap()](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20flat()%EF%BC%8CflatMap()) | 相当于flat方法加map方法。 |


*ES6内容建议参考[阮老师的电子书](http://es6.ruanyifeng.com/)（直接点上面的方法也可跳转）<br /> [http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)

以上方法的使用具体参照链接就可以了，不再赘述。<br />我们的主要精力将放在数据结构本身上。

> - 数组作为JavaScript中的重要类型，数组操作是需要掌握好的必备技能
> - 单就数组就可以开一个专题，内容庞杂。
> - 有时候一个关于高阶函数方法就可以单独开篇长文（码路工人这里有很多优秀的文章---**想给推荐给大家**---，那些作者才是真大佬、前端大侠，还有全栈牛人，读大佬们的文章也是码路工人自我提升中不断汲取营养的来源之一）


---

我做了一份 npm 工具包，基于ES6的代码实现，只要简单 install 一下即可。<br />感兴趣的话还可以去 [GitHub](https://github.com/codermonkie/data-struct-js) / [Gitee](https://gitee.com/coder-monkey/data-struct-js) 看源码。（来 Star 一下嘛）
```bash
npm install data-struct-js --save-dev
```

最后，感谢您的阅读和支持~

---

<center>-end-</center>
