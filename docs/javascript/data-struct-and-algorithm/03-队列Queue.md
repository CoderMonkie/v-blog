# 03-队列Queue


<a name="uYqhX"></a>
## 1. 认识队列Queue结构

队列，跟我们的日常生活非常贴近，我们前面举例了食堂排队打饭的例子，我们继续用这个例子来说明。

[![image.png](https://cdn.nlark.com/yuque/0/2019/png/561211/1574739273163-22e8b2b3-130c-4225-967e-1f1918658349.png#align=left&display=inline&height=418&name=image.png&originHeight=455&originWidth=813&size=37658&status=done&width=746)](https://s2.ax1x.com/2019/11/26/Mzk7KU.png)

如上图所示，

- 第一个加入队列的为队列头
- 最后一个为队列尾
- FIFO：先进先出，后进后出的原则
- 添加删除操作：只能添加到队尾，只能删除队列头

去银行办业务要先取号，然后等待叫号，一样一样的。<br />（银行也有VIP，后面我们讲优先队列）

<a name="rOg7o"></a>
## 2. 队列的应用

- JavaScript事件队列
- 图的广度优先遍历中使用队列
- 打印时的打印任务队列

等。

<a name="naQLb"></a>
## 3. 队列的实现
<a name="WKmrd"></a>
### 3.1 常用方法
与栈的比较类似

| 方法 | 描述 |
| --- | --- |
| enqueue | 添加元素到队列 |
| dequeue | 删除队列元素 |
| front | 查看当前队列头元素 |
| isEmpty | 检查是否为空队列 |
| size | 检查队列容量 |
| clear | 清空队列 |
| toString | 字符串化 |


<a name="kUflB"></a>
### 3.2 常用方法的代码实现

队列也是线性结构，下面我们基于数组来实现一下它的常用方法。

首先，写出 Queue 的构造函数

```javascript
function Queue() {
  this.__items = []
}
```

<a name="LWcOR"></a>
#### 3.2.1 enqueue
> 实现分析：
> 用push向队列添加元素

```javascript
function Queue() {
  this.__items = []
  
  Queue.prototype.enqueue = function (element) {
      this.__items.push(element)
  }
}
```

<a name="TQqEE"></a>
#### 3.2.2 dequeue
> 实现分析：
> 用shift删除队列排头元素<br />

```javascript
function Queue() {
  this.__items = []
  
  Queue.prototype.dequeue = function () {
    return this.__items.shift()
  }
}
```

<a name="WY5AF"></a>
#### 3.2.3 front
> 实现分析：
> 查看队列头即数组第一个元素

```javascript
function Queue() {
  this.__items = []
  
  Queue.prototype.front = function () {
    return this.__items.length === 0 ? undefined : this.__items[0]
  }
}
```

<a name="XJgwI"></a>
#### 3.2.4 isEmpty
> 实现分析：
> 只要看内部数组元素个数是否为0

```javascript
function Queue() {
  this.__items = []
  
  Queue.prototype.isEmpty = function () {
      return __items.length === 0
  }
}
```

<a name="gks4N"></a>
#### 3.2.5 size
> 实现分析：
> 返回内部数组元素个数

```javascript
function Queue() {
  this.__items = []
  
  Queue.prototype.size = function () {
      return this.__items.length
  }
}
```

<a name="nopSW"></a>
#### 3.2.6 clear
> 实现分析：
> 只要看元素个数是否为0

```javascript
function Queue() {
  this.__items = []
  
  Queue.prototype.clear = function () {
      this.__items.length = 0
  }
}
```

<a name="gkwK8"></a>
#### 3.2.7 toString
> 实现分析：
> 将内部数组用 join 连结

```javascript
function Queue() {
	this.__items = []
  
  Queue.prototype.toString = function() {
    return this.__items.join(',')
  }
}
```

---

实现完了，总结如下：

```javascript
function Queue() {
  this.__items = []

  Queue.prototype.enqueue = function (element) {
    this.__items.push(element)
  }

  Queue.prototype.dequeue = function () {
    return this.__items.shift()
  }

  Queue.prototype.front = function () {
    return this.__items.length === 0 ? undefined : this.__items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this.__items.length === 0
  }

  Queue.prototype.size = function () {
    return this.__items.length
  }

  Stack.prototype.clear = function () {
    this.__items.length = 0
  }

  Queue.prototype.toString = function () {
    return this.__items.join(' ')
  }
}
```


<a name="IPBQL"></a>
### 3.3 下面我们测试一下

```javascript
// ---------------------------------------------
// Test: Queue
// ---------------------------------------------
var q = new Queue()
for (var i = 0; i < 5; i++) {
    q.enqueue(i)
}
console.log('isEmpty: ', q.isEmpty())
console.log('size: ', q.size())
console.log('toString: ', q.toString())
while (!q.isEmpty()) {
    console.log(`dequeue: `, q.dequeue())
}
console.log('isEmpty: ', q.isEmpty())
console.log('size: ', q.size())

// 打印结果：
// isEmpty:  false
// size:  5
// toString:  0 1 2 3 4
// dequeue:  0
// dequeue:  1
// dequeue:  2
// dequeue:  3
// dequeue:  4
// isEmpty:  true
// size:  0
```

我们得到了符合预期的结果。

<a name="7pU0w"></a>
## 4. 思考题：基于栈结构的队列实现
<a name="w0HS5"></a>
### 4.1 栈与队列的顺序原则是相反的，如何用栈实现上面的队列？
学完了 Stack 和 Queue这两个常用的典型数据结构，<br />让我们暂时放慢攀登的脚步，缓缓消化一下：<br />这时候正合适练习一下，在使用中加深对这两个数据结构的理解，<br />发现我们实现的代码中，还要哪些问题，哪些地方可以改善。

在解答之前，让我们先对之前的栈稍做改进。

回想一下，我们实现的栈结构常用方法中，还欠缺什么？

- 不能获取元素集合
- 没有办法遍历集合

<a name="4cywP"></a>
#### 4.1.1 对已实现的栈结构的改进

- 添加获取元素集合的方法
> Stack.js

```javascript
function Stack() {
  this.__items = []
  // ...
  Stack.prototype.getItems = function() {
    return this.__items
  }
}
```
> 这样，是实现了，但是，
> 这里返回 __items 在简单类型时值传递没有问题，
> 复杂类型时，返回的引用使外部可以对其进行修改，
> 这就不符合我们栈的要求了。

```javascript
// 错误结果示例：
var s = new Stack()
s.push(22)
s.push(33)
console.log(s)				// => [22, 33]
var items = s.getItems()
items[0] = 11
console.log(s)				// => [11, 33]
// ↑ 栈结构的数据不应该被这样修改
```

- 获取元素集合的改进<br />这里应该使用深拷贝的，我们来简单实现一下<br />这样的工具方法积累多了你可以写一个如`underscore.js`这样的库了
```javascript
// 工具方法：深拷贝
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

> Stack.js

```javascript
Stack.prototype.getItems = function() {
  this.__items = []
  // ...
  Stack.prototype.getItems = function() {
    return deepCopy(this.__items)
  }
}
```
测试一下：
```javascript
// 正确结果示例：
var s = new Stack()
s.push(22)
s.push(33)
console.log(s)				// => [22, 33]
var items = s.getItems()
items[0] = 11
console.log(s)				// => [22, 33]
// ↑ 栈结构的数据未被修改
```

- 遍历集合<br />
> Stack.js

这里遍历时使用上面刚添加的 getItems 方法，在回调中传入集合元素副本
```javascript
Stack.prototype.traverse = function (cb) {
  if (!cb || toString.call(cb) !== '[object Function]') return

  var items = this.getItems()
  for (var index = items.length - 1; index >= 0; index--) {
    var element = items[index];
    cb(element, index)
  }
}
```
> 同理，可以给队列 Queue 添加以上两个方法
> （获取集合的getItems方法和遍历的traverse方法），
> 你可以试试呀


下面我们就去完成基于栈结构的队列实现。

<a name="mmeFi"></a>
### 4.2 代码实现
> 实现分析：
> 栈与队列的顺序原则刚好是相反的，要用栈实现队列，就需要两个栈，
> 一个放传入的元素，一个放调整顺序后准备出队的元素。

- `__inStack` ：用于入队
- `__outStack` ：用于出队
- 入队时：直接入队， `push` 进 `__inStack` 
- 出队时：出队集合`__outStack `中有元素则直接出队，没有的话将 `__inStack` 中的元素倒过来
```javascript
function QueueBasedOnStack() {

  this.__inStack = new Stack()
  this.__outStack = new Stack()

  QueueBasedOnStack.prototype.enqueue = function(element) {
    this.__inStack.push(element)
  }

  QueueBasedOnStack.prototype.dequeue = function() {
    if(this.__outStack.isEmpty()) {
      while(!this.__inStack.isEmpty()) {
        this.__outStack.push(this.__inStack.pop())
      }
    }
    return this.__outStack.pop()
  }

  QueueBasedOnStack.prototype.size = function() {
    return (this.__inStack.size() + this.__outStack.size())
  }

  QueueBasedOnStack.prototype.isEmpty = function() {
    return this.__inStack.size() === 0 && this.__outStack.size() === 0
  }

  QueueBasedOnStack.prototype.clear = function() {
    this.__inStack.clear() 
    this.__outStack.clear()
  }

  QueueBasedOnStack.prototype.toString = function() {
    var items = this.getItems()
    return items.join('--')
  }

  QueueBasedOnStack.prototype.getItems = function() {
    return this.__inStack.getItems().concat(this.__outStack.getItems().reverse())
  }
}

```

测试一下

```javascript
// ---------------------------------------------
// Test: QueueBasedOnStack
// ---------------------------------------------
console.log('----Test: QueueBasedOnStack----')

var qs = new QueueBasedOnStack()
qs.enqueue('A')
console.log('after enqueue: ', qs.toString())
qs.enqueue('B')
console.log('after enqueue: ', qs.toString())
qs.enqueue('C')
qs.enqueue('D')
qs.enqueue('E')
console.log('after enqueue: ', qs.toString())
qs.dequeue()
console.log('after dequeue: ', qs.toString())
qs.dequeue()
console.log('after dequeue: ', qs.toString())
qs.dequeue()
console.log('after dequeue: ', qs.toString())
```

查看结果：

```
----Test: QueueBasedOnStack----
after enqueue:  A
after enqueue:  A--B
after enqueue:  A--B--C--D--E
after dequeue:  B--C--D--E
after dequeue:  C--D--E
after dequeue:  D--E
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
