# JavaScript之倔强的字符串

### 关于倔强的JavaScript字符串：不可以被修改

> 我们是字符串  
  我们的口号是：你可以消灭我，但是你不能改变我

JavaScript字符串是不可改变的，当真是这样的吗？

让我们来试验一下。

```js
var name = "Coder-Monkey"
console.log(name[0])     // C
console.log(name[11])    // y
```

以上结果表明，字符串可以通过下标来访问。

试着修改一下：
```js
name[0] = "X"
name[11] = "X"
console.log(name)       // Coder-Monkey
```

果然有骨气，改不动。

+ JS中，字符串作为固定的常量值存储在堆
+ 字符串的值不可通过下标来改变

不能改变这一点，似乎超出很多人的想像，平时编码时的经验表明可以改变啊。。

其实，那不是改变，而是重新赋值而已，指向了另一个字符串所在的内存地址。

就像这样，是可以的：
```js
name = "CoderMonkie"
console.log(name)       // CoderMonkie
```

那么，当需要“修改”原有字符串，而不是重新赋值一个不相干的值时怎么办呢？

看使用场景，如果明确修改前修改后的内容，可以用字符串的`replace`方法替换。

如果像开始的示例中那样，只修改指定位置，那么我们可以绕一个圈子来模拟修改操作。

+ 通过字符串的`split('')`方法将字符串转为数组
+ 通过数组下标修改数组
+ 通过数组的`join('')`方法再将数组连接成字符串

以上，完成。

Talk is cheep, so show you the code.

```js
var arr = name.split('')
arr[0] = 'X'
arr[11] = 'X'
name = arr.join('')

console.log(name)
// XoderMonkiX
```
