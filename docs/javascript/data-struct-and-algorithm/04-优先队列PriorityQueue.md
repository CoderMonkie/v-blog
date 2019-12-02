# 04-优先队列PriorityQueue

<a name="BnTAH"></a>
## 1. 认识优先队列

经典的案例场景：

- 登机时经济舱的普通队列与头等舱的优先队列
- 股票交易时基于时间和价格的成交规则上，量大优先的优先队列

再用我们打饭的例子：<br />假定规则：饥饿等级0级最高，需要马上进食<br />下图同学C优先级高于同学B，插队在同学A后面<br />[![PriorityQueue.png](https://cdn.nlark.com/yuque/0/2019/png/561211/1574845941692-5a3c117a-0a06-46c9-8fb7-10054aad8aa0.png#align=left&display=inline&height=460&name=PriorityQueue.png&originHeight=463&originWidth=751&size=21258&status=done&width=746)](https://s2.ax1x.com/2019/11/27/Q9Oie1.png)


<a name="HuzsI"></a>
## 2. 代码实现

在队列 Queue 的基础上，我们来实现一下优先队列。

- 优先队列只在入队操作上与普通队列不同，其它方法相同不再赘述
- 参考上一节里的基于栈实现的队列，也稍稍修改下队列实现的代码

> 入队操作实现分析：
> - 在创建元素时，我们需要一个优先级参数/字段（priority）
> - 并对优先级做检查，以及默认值设置
> - 空队列时直接入队
> - 非空时，从队列头部开始比对每一个元素，新元素优先级高时插入
> - 比对到最后一个也没能插入时（新元素优先级最低）添加到队尾


主要方法：enqueue 和 QueueElement

```javascript
function PriorityQueue() {
  this.__items = []

  function QueueElement(element, priority) {
    // check priority
    if(typeof(priority) != 'number' || Number.isNaN(priority)) {
      // min-level: Infinity
      priority = Infinity
    }
    this.__element = element
    // max-level: 0
    this.__priority = priority

    QueueElement.prototype.priority = function() {
      return this.__priority
    }

    QueueElement.prototype.toString = function() {
      return this.__element.toString.apply(this.__element)
    }
  }

  PriorityQueue.prototype.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority)

    if(this.__items.length === 0) {
      this.__items.push(queueElement)
    }
    else {
      var added = false
      for(var i=0;i<this.__items.length;i++) {
        if(queueElement.priority() < this.__items[i].priority()) {
          this.__items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added) {
        this.__items.push(queueElement)
      }
    }
  }
}
```
> 自己封装的优先队列中优先级priority也可以作为复杂对象上的一个属性，无需另传参数


完整代码（用到的上一节中的 deepCopy 方法也一并贴上吧）
> PriorityQueue.js

```javascript
function PriorityQueue() {
  this.__items = []

  function QueueElement(element, priority) {
    // check priority
    if(typeof(priority) != 'number' || Number.isNaN(priority)) {
      // min-level: Infinity
      priority = Infinity
    }
    this.__element = element
    // max-level: 0
    this.__priority = priority

    QueueElement.prototype.priority = function() {
      return this.__priority
    }

    QueueElement.prototype.toString = function() {
      return this.__element.toString.apply(this.__element)
    }
  }

  PriorityQueue.prototype.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority)

    if(this.__items.length === 0) {
      this.__items.push(queueElement)
    }
    else {
      var added = false
      for(var i=0;i<this.__items.length;i++) {
        if(queueElement.priority() < this.__items[i].priority()) {
          this.__items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added) {
        this.__items.push(queueElement)
      }
    }
  }

  PriorityQueue.prototype.dequeue = function() {
    return this.getItems().shift()
  }

  PriorityQueue.prototype.front = function () {
    return this.__items.length === 0 ? undefined : this.getItems()[0]
  }

  PriorityQueue.prototype.getItems = function() {
    return deepCopy(this.__items)
  }

  PriorityQueue.prototype.isEmpty = function () {
    return this.__items.length === 0
  }

  PriorityQueue.prototype.size = function () {
    return this.__items.length
  }

  PriorityQueue.prototype.clear = function () {
    this.__items.length = 0
  }

  PriorityQueue.prototype.toString = function () {
    var arrStr = this.__items.map((qe)=>{
      return qe.toString()
    })
    return arrStr.join('\r\n')
  }
}
```

```javascript
function deepCopy(source) {
  var dest
  if(Array.isArray(source)) {
    dest = []
    for (let i = 0; i < source.length; i++) {
      dest[i] =deepCopy(source[i])
    }
  }
  else if(toString.call(source) === '[object Object]') {
    dest = {}
    for(var p in source){
      if(source.hasOwnProperty(p)){
        dest[p]=source[p]
      }
    }
  }
  else {
    dest = source
  }
  return dest
}
```

测试一下

```javascript
var pq = new PriorityQueue()

pq.enqueue({name: 'A-First Element | Priority:1', age: 18, toString: function(){return this.name}}, 1)
pq.enqueue({name: 'B-Second Element | Priority:3', age: 18, toString: function(){return this.name}}, 3)
pq.enqueue({name: 'C-Third Element | Priority:2', age: 18, toString: function(){return this.name}}, 2)

console.log(pq.toString())
```
以优先级分别为 1 -> 3 -> 2 的顺序添加元素，<br />输出结果为：
```
A-First Element | Priority:1
C-Third Element | Priority:2
B-Second Element | Priority:3
```

收工。

---

文章中的代码实现能让我们更简单地弄清楚我们要讲的数据结构，<br />不同于文章中的代码实现，我还做了一份 npm 工具包，<br />基于ES6，只要简单 install 一下即可。<br />感兴趣的话还可以去 [GitHub](https://github.com/codermonkie/data-struct-js) / [Gitee](https://gitee.com/coder-monkey/data-struct-js) 看源码。（来 Star 一下嘛）
```bash
npm install data-struct-js --save-dev
```

最后，感谢您的阅读和支持~

---

<center>-end-</center>
