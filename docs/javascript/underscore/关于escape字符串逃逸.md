# 字符串逃逸

---

# 字符串逃逸是个啥？

工友们可能有的人没有听过`字符串逃逸`，但`转义`应该是听过的。

其实本质指的就是同一个事情。学名写作`escape`。

主要是针对用户输入，将一些特殊字符，转换为html实体字符。

# 为什么要做`字符串逃逸`（转义）？

前几天刚刚看到一篇文章，作者发现了公众号的一个漏洞，标题的内容没有做转义。

[前端XSS安全漏洞](https://juejin.im/post/5d6f1e68f265da03d871dc08?utm_source=gold_browser_extension)

大厂曝出这种问题还是有些意外的，文章做了，标题没做，  
这再次警示了我们每一位码路工友，千万仔细，测试全面。

# `字符串逃逸`（转义）是怎么做的？

首先准备一个`html`文件，内容包括：

一个文本框用以输入文字，  
一个按钮用以模拟提交动作，  
再一个显示输入内容的元素。

> demo-escape-xss.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS-Corner 第2期 Escape XSS示例</title>
</head>
<body>
    <div class="container">
        <div>
            <input type="text" name="txt" id="txt" value="">
            <button id='btnSave'>Submit!</button>
        </div>
        <hr>
        <h2>Without Escape</h2>
        <div id='txtSaved'></div>
    </div>

    <script>
        document.querySelector('#btnSave').addEventListener('click', function(e){
            let txt = document.querySelector('#txt').value
            if(txt){
                document.querySelector('#txtSaved').innerHTML = txt
            }
        })
    </script>
</body>
</html>
```

试着输入以下内容，验证结果：`JavaScript`语句被执行了。

```js
<a href='alert("Hello! CoderMonkey~")'>Hello CoderMonkie</a>
```

> 如果不是一个`alert`，而是写一个死循环？或者其它超出我们想象的恶意代码呢？

这种危险可不能让它发生，所以都要替换掉：

> demo-escape-xss.html

```js
// 要替换的内容
const escapeMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
}

function escape(txt){
    // 创建正则表达式
    let regStr = `(?:${Object.keys(escapeMap).join('|')})`
    let regExp = new RegExp(regStr, 'g')

    // 文字替换
    const replacer = function(match){
        return escapeMap[match]
    }

    // 匹配则替换，不匹配则直接原样返回
    regExp.test(txt) ? txt.replace(regExp, replacer) : txt
}

```

当然也可以写成`IIFE`插件的形式。

> escape.js

```js
(function(){
    // 要替换的内容
    const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
    }

    function createEscaper(){
        return function(txt){
            let regSource = `(?:${Object.keys(escapeMap).join('|')})`
            let regExp = new RegExp(regSource, "g")

            // 文字替换
            function replacer(match){
                return escapeMap[match]
            }

            // 匹配则替换，不匹配则直接原样返回
            return regExp.test(txt) ? txt.replace(regExp, replacer) : txt
        }
    }

    root.escape = createEscaper()

})(this)
```

稍微修改一下刚才的`html`文件，来检验我们上面的写的函数。

> demo-escape-xss.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS-Corner 第2期 Escape XSS示例</title>
</head>
<body>
    <div class="container">
        <div>
            <input type="text" name="txt" id="txt" value="">
            <button id='btnSave'>Submit!</button>
        </div>
        <hr>
        <h2>Without Escape</h2>
        <div id='txtSaved'></div>
        <hr>
        <h2>With Escape</h2>
        <div id='txtSavedEscape'></div>
    </div>

    <script>
        document.querySelector('#btnSave').addEventListener('click', function(e){
            let txt = document.querySelector('#txt').value
            if(txt){
                document.querySelector('#txtSaved').innerHTML = txt
            }
        })
    </script>

    <script src="./escape.js"></script>

    <script>
        document.querySelector('#btnSave').addEventListener('click', function(e){
            let txt = document.querySelector('#txt').value
            if(txt){
                let escaped = escape(txt)
                document.querySelector('#txtSavedEscape').innerHTML = escaped
            }
        })
    </script>
</body>
</html>
```

# 能不能开脑洞？

能。脑洞一下，联系实际。

除了做以上特殊字符危险字符的转义，还有一件类似的事情。

那就是，敏感词(过滤)。

看完帖子不说的什么？不礼貌吧？评论的时候，发布不上？  
或显示出来跟自己输入的不一样了？

-> 恭喜你被河蟹了。

在以上我们实现的代码中，稍加配置，即可实现简单的自定义敏感词过滤功能。

> demo-escape-xss.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS-Corner 第2期 Escape XSS示例</title>
</head>
<body>
    <div class="container">
        <div>
            <input type="text" name="txt" id="txt" value="">
            <button id='btnSave'>Submit!</button>
        </div>
        <hr>
        <h2>Without Escape</h2>
        <div id='txtSaved'></div>
        <hr>
        <h2>With Escape</h2>
        <div id='txtSavedEscape'></div>
    </div>

    <script>
        document.querySelector('#btnSave').addEventListener('click', function(e){
            let txt = document.querySelector('#txt').value
            if(txt){
                document.querySelector('#txtSaved').innerHTML = txt
            }
        })
    </script>

    <script src="./escape-advance.js"></script>

    <script>
        // 敏感词过滤对象
        const settings = {
            'fuck': 'f***',
            'shit': 's***',
        }

        document.querySelector('#btnSave').addEventListener('click', function(e){
            let txt = document.querySelector('#txt').value
            if(txt){
                let escaped = escape(txt, settings) // 传入配置
                document.querySelector('#txtSavedEscape').innerHTML = escaped
            }
        })
    </script>
</body>
</html>
```

> escape.js

```js
(function(root){

    // 要替换的内容
    const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '&': '&amp;',
    }

    function createEscaper(map){
        return function(txt, settings){

            Object.assign(map, settings)

            let regSource = `(?:${Object.keys(map).join('|')})`
            let regExp = new RegExp(regSource, "g")

            // 文字替换
            function replacer(match){
                return map[match]
            }

            // 匹配则替换，不匹配则直接原样返回
            return regExp.test(txt) ? txt.replace(regExp, replacer) : txt
        }
    }

    root.escape = createEscaper(escapeMap)
})(this)
```

好了，再来试试，在文本框里输入上面`settings`里定义的单词，

提交后显示出来的，已经是按要求过滤后的结果了。

以上。

<Valine></Valine>