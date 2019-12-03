(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{209:function(t,e,r){"use strict";r.r(e);var a=r(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_01-数组array"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_01-数组array"}},[t._v("#")]),t._v(" 01-数组Array")]),t._v(" "),r("p",[r("a",{attrs:{name:"nWswF"}})]),t._v(" "),r("h1",{attrs:{id:"【javascript数据结构系列】01-数组array"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#【javascript数据结构系列】01-数组array"}},[t._v("#")]),t._v(" 【JavaScript数据结构系列】01-数组Array")]),t._v(" "),r("p",[t._v("数组是JavaScript中最常用的数据结构，"),r("br"),t._v("在ES6之前也JS中也只有数组这一种数据结构，"),r("br"),t._v("ES6之后加入了Set和Map。")]),t._v(" "),r("p",[t._v("数组本身其实并不同于JS中的数组Array，"),r("br"),t._v("只是为了使用方便，JS封装的数组具有更多特性。")]),t._v(" "),r("p",[t._v("我们分以下及部分来讲：")]),t._v(" "),r("ul",[r("li",[t._v("原本的数组")]),t._v(" "),r("li",[t._v("JS中的数组\n"),r("ul",[r("li",[t._v("ES5之前的数组")]),t._v(" "),r("li",[t._v("ES6之后的数组")])])])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"RML8i"}})]),t._v(" "),r("h2",{attrs:{id:"original-array"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#original-array"}},[t._v("#")]),t._v(" Original Array")]),t._v(" "),r("p",[t._v("原始数组具有以下特点：")]),t._v(" "),r("ul",[r("li",[t._v("属于线性结构")]),t._v(" "),r("li",[t._v("固定的长度/容量")]),t._v(" "),r("li",[t._v("具有下标/索引")])]),t._v(" "),r("p",[t._v("因此，数组具有以下优点："),r("br")]),t._v(" "),r("ul",[r("li",[t._v("通过下标索引访问查找元素非常方便高效"),r("br")]),t._v(" "),r("li",[t._v("通过下标索引方便遍历元素")]),t._v(" "),r("li",[t._v("可以在任意位置插入删除元素")])]),t._v(" "),r("p",[t._v("同样，数组也有相应的劣势："),r("br")]),t._v(" "),r("ul",[r("li",[t._v("固定长度，不便于处理非定长数据"),r("br"),t._v("而数据一般都是动态的，需要手动扩容/缩容"),r("br")]),t._v(" "),r("li",[t._v("需要进行遍历才能通过元素进行查找"),r("br"),t._v("时间复杂度高"),r("br")]),t._v(" "),r("li",[t._v("插入删除元素时需要移动其它元素位置"),r("br"),t._v("增加删除元素效率低")]),t._v(" "),r("li",[t._v("只能存储一种数据类型")])]),t._v(" "),r("p",[t._v("另外，数组可以是一维数组，也可以有二维数组，"),r("br"),t._v("也就是说，数组嵌套，元素也是数组。")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"f0G8p"}})]),t._v(" "),r("h2",{attrs:{id:"js中的数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js中的数组"}},[t._v("#")]),t._v(" JS中的数组")]),t._v(" "),r("p",[t._v("JavaScript中提供了数组这种数据类型，不再需要我们自己封装。"),r("br"),t._v("JS中的Array不同于原始数组，不再是固定长度，你可以几乎无限的push进元素，因为它在底层实现上自动扩容的，让你感觉不到固定长度的限制。"),r("br"),t._v("另外，也可以存放不同类型的数据。")]),t._v(" "),r("p",[t._v("数组有length属性，提供了一系列操作数组数据的方法。"),r("br"),t._v("还有它的近亲，类数组（就是类似于数组的意思），同样具有length属性，但不具有Array.prototype上的方法，我们通常是通过改变this指向来借用数组的方法。")]),t._v(" "),r("p",[t._v("例如：")]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (4) [1, 2, 3, 4]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\t0: 1")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\t1: 2")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\t2: 3")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\t3: 4")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\tlength: 4")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\t__proto__: Array(0)")]),t._v("\n")])])]),r("p",[t._v("※新语法里可以将可迭代对象转为数组，获取数组更简便")]),t._v(" "),r("blockquote",[r("p",[t._v("你能不眨眼一口气说出 JavaScript 中数组的所有方法吗？")])]),t._v(" "),r("p",[t._v("因ES6版本发生重大变化，所以分ES5之前跟ES6之后来说。")]),t._v(" "),r("p",[r("a",{attrs:{name:"Oq9uj"}})]),t._v(" "),r("h3",{attrs:{id:"es5之前常用的数组方法有："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es5之前常用的数组方法有："}},[t._v("#")]),t._v(" ES5之前常用的数组方法有：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_concat_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("concat()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("连接两个或更多的数组，并返回结果。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-every.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("every()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("检测数值元素的每个元素是否都符合条件。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-filter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filter()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("检测数值元素，并返回符合条件所有元素的数组。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-foreach.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("forEach()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("数组每个元素都执行一次回调函数。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-indexof-array.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("indexOf()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("搜索数组中的元素，并返回它所在的位置。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-isarray.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("isArray()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("判断对象是否为数组。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-join.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("join()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-lastindexof-array.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("lastIndexOf()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("搜索数组中的元素，并返回它最后出现的位置。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-map.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("map()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("通过指定函数处理数组的每个元素，并返回处理后的数组。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_pop.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("pop()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("删除并返回数组的最后一个元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_push.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("push()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("向数组的末尾添加一个或更多元素，并返回新的长度。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-reduce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reduce()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("将数组元素计算为一个值（从左到右）。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-reduceright.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reduceRight()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("将数组元素计算为一个值（从右到左）。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_reverse.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("reverse()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("颠倒数组中元素的顺序。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_shift.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("shift()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("删除并返回数组的第一个元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_slice_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("slice()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("从某个已有的数组返回选定的元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-some.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("some()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("检测数组元素中是否有元素符合指定条件。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_sort.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("sort()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("对数组的元素进行排序")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_splice.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("splice()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("删除元素，并向数组添加新元素。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_tosource_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("toSource()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("返回该对象的源代码。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_toString_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("toString()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("把数组转换为字符串，并返回结果。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_toLocaleString_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("toLocaleString()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("把数组转换为本地数组，并返回结果。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_unshift.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("unshift()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("向数组的开头添加一个或更多元素，并返回新的长度。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_valueof_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("valueOf()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("返回数组对象的原始值")])])])]),t._v(" "),r("p",[t._v("*以上参考自："),r("br"),t._v(" ["),r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_obj_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3School"),r("OutboundLink")],1),t._v("]("),r("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_obj_array.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.w3school.com.cn/jsref/jsref_obj_array.asp"),r("OutboundLink")],1),t._v(")"),r("br"),t._v(" ["),r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-obj-array.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程"),r("OutboundLink")],1),t._v("]"),r("a",{attrs:{href:"https://www.runoob.com/jsref/jsref-obj-array.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/jsref/jsref-obj-array.html"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("p",[r("a",{attrs:{name:"4JKVl"}})]),t._v(" "),r("h3",{attrs:{id:"es6之后新增的数组方法有："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es6之后新增的数组方法有："}},[t._v("#")]),t._v(" ES6之后新增的数组方法有：")]),t._v(" "),r("p",[r("a",{attrs:{name:"r6giR"}})]),t._v(" "),r("h4",{attrs:{id:"静态方法："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态方法："}},[t._v("#")]),t._v(" 静态方法：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#Array-from",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array.from"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("可以将类数组对象(array-like object)或可迭代对象(iterable object)转为数组。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#Array-of",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array.of"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("将一组值转换为数组")])])])]),t._v(" "),r("p",[r("a",{attrs:{name:"Qw5Z4"}})]),t._v(" "),r("h4",{attrs:{id:"实例方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20copyWithin()",target:"_blank",rel:"noopener noreferrer"}},[t._v("copyWithin()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20find()%20%E5%92%8C%20findIndex()",target:"_blank",rel:"noopener noreferrer"}},[t._v("find()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("找出第一个符合条件的数组成员。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20find()%20%E5%92%8C%20findIndex()",target:"_blank",rel:"noopener noreferrer"}},[t._v("findIndex()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20fill()",target:"_blank",rel:"noopener noreferrer"}},[t._v("fill()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("初始化一个用指定元素填充的新数组。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20entries()%EF%BC%8Ckeys()%20%E5%92%8C%20values()",target:"_blank",rel:"noopener noreferrer"}},[t._v("entries()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("用于数组遍历，返回键值对的遍历器对象。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20entries()%EF%BC%8Ckeys()%20%E5%92%8C%20values()",target:"_blank",rel:"noopener noreferrer"}},[t._v("keys()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("用于数组遍历，返回键的遍历器对象。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20entries()%EF%BC%8Ckeys()%20%E5%92%8C%20values()",target:"_blank",rel:"noopener noreferrer"}},[t._v("values()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("用于数组遍历，返回值的遍历器对象。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20includes()",target:"_blank",rel:"noopener noreferrer"}},[t._v("includes()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("判断数组是否包含指定的值，返回布尔值结果。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20flat()%EF%BC%8CflatMap()",target:"_blank",rel:"noopener noreferrer"}},[t._v("flat()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("将二维数组变为一维数组（即嵌套多层时只能减少一层）。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84%20flat()%EF%BC%8CflatMap()",target:"_blank",rel:"noopener noreferrer"}},[t._v("flatMap()"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("相当于flat方法加map方法。")])])])]),t._v(" "),r("p",[t._v("*ES6内容建议参考"),r("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮老师的电子书"),r("OutboundLink")],1),t._v("（直接点上面的方法也可跳转）"),r("br"),t._v(" "),r("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://es6.ruanyifeng.com/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("以上方法的使用具体参照链接就可以了，不再赘述。"),r("br"),t._v("我们的主要精力将放在数据结构本身上。")]),t._v(" "),r("blockquote",[r("ul",[r("li",[t._v("数组作为JavaScript中的重要类型，数组操作是需要掌握好的必备技能")]),t._v(" "),r("li",[t._v("单就数组就可以开一个专题，内容庞杂。")]),t._v(" "),r("li",[t._v("有时候一个关于高阶函数方法就可以单独开篇长文（码路工人这里有很多优秀的文章---"),r("strong",[t._v("想给推荐给大家")]),t._v("---，那些作者才是真大佬、前端大侠，还有全栈牛人，读大佬们的文章也是码路工人自我提升中不断汲取营养的来源之一）")])])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("我做了一份 npm 工具包，基于ES6的代码实现，只要简单 install 一下即可。"),r("br"),t._v("感兴趣的话还可以去 "),r("a",{attrs:{href:"https://github.com/codermonkie/data-struct-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1),t._v(" / "),r("a",{attrs:{href:"https://gitee.com/coder-monkey/data-struct-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),r("OutboundLink")],1),t._v(" 看源码。（来 Star 一下嘛）")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" data-struct-js --save-dev\n")])])]),r("p",[t._v("最后，感谢您的阅读和支持~")]),t._v(" "),r("hr"),t._v(" "),r("center",[t._v("-end-")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);