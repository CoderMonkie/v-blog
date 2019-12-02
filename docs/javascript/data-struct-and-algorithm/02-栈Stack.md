# 02-栈Stack

<a name="aAMxs"></a>
## 1. 认识栈结构

栈是非常常用的一种数据结构，<br />与数组同属线性数据结构，<br />不同于数组的是它是一种受限的线性结构。

画一张图来说明：

[![stack](https://cdn.nlark.com/yuque/0/2019/png/561211/1574557145752-bf272f57-621c-48d5-aa93-66ea2345eaf2.png#align=left&display=inline&height=421&name=stack&originHeight=421&originWidth=526&size=0&status=done&width=526)](https://s2.ax1x.com/2019/11/24/MLesSO.png)<br />
<br />如上图所示，

- 最新入栈的元素/最底下的元素，为栈底
- 最后一个/最上面的元素，为栈顶
- 最后一个入栈元素最先出栈（LIFO原则）
- 只能操作栈顶
- 添加元素叫：进栈/压栈/入栈
- 删除元素叫：出栈/退栈

<br />
<a name="Nf5Ny"></a>
## 2. 栈的应用：

- 函数调用栈
- 文本编辑器中的撤销与重做

等。

<a name="cqblk"></a>
## 3. 栈的实现

<a name="YcOK5"></a>
### 3.1 常用方法

| 方法 | 描述 |
| --- | --- |
| push | 添加元素到栈顶 |
| pop | 删除栈顶元素 |
| peek<br /> | 查看栈顶元素 |
| isEmpty | 检查是否为空栈 |
| size | 检查栈容量 |
| clear | 清空栈 |
| toString | 字符串化 |



<a name="8BHcV"></a>
### 3.2 常用方法的代码实现

栈的实现可以基于数组，也可以基于链表，<br />这里我们用基于数组来实现一下。

首先，写出Stack的构造函数

```javascript
function Stack() {
  this.__items = []  
}
```

<a name="vuslp"></a>
#### 3.2.1 push
> 实现分析：
> 向数组尾部添加元素，同JS数组操作

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.push = function(element) {
  	return this.__items.push(element)
  }
}
```

<a name="dlbdW"></a>
#### 3.2.2 pop
> 实现分析：
> 删除/弹出数组最后一个元素，同JS数组操作

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.pop = function() {
  	return this.__items.pop()
  }
}
```
<a name="heKKD"></a>
#### 
<a name="CKlVW"></a>
#### 3.2.3 peek
> 实现分析：
> 查看栈顶即数组最后一个元素

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.peek = function() {
  	if(!this.__items.length) return null
    return this.__items[this.__items.length-1]
  }
}
```
<a name="DVHPX"></a>
#### 
<a name="ciiGt"></a>
#### 3.2.4 isEmpty
> 实现分析：
> 只要看内部数组元素个数是否为0

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.isEmpty = function() {
    return this.__items.length === 0
  }
}
```
<a name="DLPOA"></a>
#### 
<a name="IIy5E"></a>
#### 3.2.5 size
> 实现分析：
> 返回内部数组元素个数

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.size = function() {
    return this.__items.length
  }
}
```

<a name="f7quP"></a>
#### 3.2.6 clear
> 实现分析：

> 清空内部数组

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.clear = function() {
    this.__items.length = 0
  }
}
```

<a name="gkwK8"></a>
#### 3.2.7 toString
> 实现分析：
> 将内部数组用 join 连结

```javascript
function Stack() {
	this.__items = []
  
  Stack.prototype.toString = function() {
    return this.__items.join(' ')
  }
}
```

---

实现完了，总结如下：<br />

```javascript
function Stack() {
    this.__items = []

    Stack.prototype.push = function (element) {
        return this.__items.push(element)
    }

    Stack.prototype.pop = function () {
        return this.__items.pop()
    }

    Stack.prototype.peek = function () {
        if (!this.__items.length) return null
        return this.__items[this.__items.length - 1]
    }

    Stack.prototype.isEmpty = function () {
        return this.__items.length === 0
    }

    Stack.prototype.size = function () {
        return this.__items.length
    }

    Stack.prototype.clear = function() {
      this.__items.length = 0
    }
  
    Stack.prototype.toString = function () {
        return this.__items.join(' ')
    }
}
```

<a name="cttQu"></a>
### 3.3 下面我们测试一下：

```javascript
// ---------------------------------------------
// Test
// ---------------------------------------------
var s = new Stack()
for(var i = 0; i < 5; i++){
    s.push(i)
}
console.log('isEmpty: ',s.isEmpty())	// isEmpty: false
console.log('size: ',s.size())				// size: 5
console.log(s.toString())							// 0 1 2 3 4
while(s.size()) {
    console.log(`pop: `, s.pop())			// 4 3 2 1 0
}
console.log('isEmpty: ',s.isEmpty())	// isEmpty: true
console.log('size: ',s.size())				// size: 0
```

我们得到了符合预期的结果。

> 在上面的实现中，没有考虑复杂类型时的引用传递问题，
> 也没有遍历方法，这些我们将在下一节（队列）里补充完善。


<a name="BUG6F"></a>
## 4. 思考题
<a name="chFOF"></a>
### 4.1 判断哪个不是可能的出栈顺序？（）

```markdown
有六个元素`6,5,4,3,2,1`依次进栈，下列哪一个不是合法的出栈顺序？
- A. 5 4 3 6 1 2
- B. 4 5 3 2 1 6
- C. 3 4 6 5 2 1
- D. 2 3 4 1 5 6
```

<a name="ElP49"></a>
### 4.2 十进制整数转二进制的方法实现
<a name="f0nZF"></a>
#### 4.2.1 转换的数学方法
将一个十进制的数转为二进制，

- 将这个数与2取模，记录余数，将商用于下一次计算
- 重复上一步，直到商为0
- 将得到的余数由后向前连接起来，即为所求二进制结果

举例：计算8的2进制值是多少

| 原十进制值 | 取模 | 等于 | 余数 |
| --- | --- | --- | --- |
| 8 | 2 | 4 | 0 |
| 4 | 2 | 2 | 0 |
| 2 | 2 | 1 | 0 |
| 1 | 2 | 0 | 1 |


这样，得到的二进制就是：1000<br />（也即 0000 1000）

负数时的规则：反码后加1补码<br />所以 -8 的二进制计算过程为：

- 0000 1000取反：1111 0111
- 补码：1111 1000

<a name="7tXan"></a>
#### 4.2.2 转换的代码实现
基于栈的实现，这里就不重复贴 `Stack.js` 的代码了。
> 代码实现分析：

> - 等于0的情况，直接返回0

> - 大于0的情况，按照我们上面列出的转换方法
>   - 与2取模，保存入栈，直到商为0
>   - 依序出栈，拼接结果并返回

> - 小于0的情况，比起以上两种情况来说最复杂
>   - 先乘以-1转为正整数，再按照大于0的情况进行取模处理
>   - 取模结果要取反（即0变1，1变0），然后保存入栈
>   - 计算完，依序出栈，得到中间结果
>   - 将上面得到的结果值 +1 进行补码
>   - 再在首位前加上一位1来表示负数
>   - TODO：其实还需要完善一点，空位用1补足8位（或其它可能的位数）

```javascript
// ---------------------------------------------
// decimal to binary
// ---------------------------------------------
function dec2bin(decNum) {
    if(!decNum) return 0

    var stack = new Stack()
    var minus = decNum < 0
    
    if(minus) {
        decNum *= -1
        while(decNum) {
            var temp = decNum % 2
            switch(temp) {
                case 0:
                    temp = 1
                    break
                case 1:
                    temp = 0
                    break
            }
            stack.push(temp)
            decNum = parseInt(decNum / 2)
        }
    } else {
        while(decNum) {
            stack.push(decNum % 2)
            decNum = parseInt(decNum / 2)
        }
    }

    var result = ''
    while(!stack.isEmpty()) {
        result += stack.pop()
    }

    if(minus) {
        // 补码
        for(var i=result.length-1;i>=0;i--) {
            var arrTemp = result.split('')
            switch(result[i]) {
                case '0':
                    arrTemp[i] = 1
                    break
                case '1':
                    arrTemp[i] = 0
                    break
            }
            result = arrTemp.join('')
        }
        result = '1' + result
    }

    return result
}

var ret = dec2bin(8)
console.log(' 8 => ', ret)    // 1000

ret = dec2bin(-8)
console.log('-8 => ', ret)    // 1 1000
```

---

文章中的代码实现能让我们更简单地弄清楚我们要讲的数据结构，<br />不同于文章中的代码实现，我还做了一份 npm 工具包，<br />基于ES6，只要简单 install 一下即可。<br />感兴趣的话还可以去 [GitHub](https://github.com/codermonkie/data-struct-js) / [Gitee](https://gitee.com/coder-monkey/data-struct-js) 看源码。（来 Star 一下嘛）
```bash
npm install data-struct-js --save-dev
```

最后，感谢您的阅读和支持~

---

<center>-end-</center>
