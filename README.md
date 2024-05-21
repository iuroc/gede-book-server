# gede-book-server

> 歌德电子书 API Express Router

## 快速开始

```bash
npm i gede-book-server
```

```ts
import express from 'express'
import gede from 'gede-book-server'

const app = express()

app.use(gede)

app.listen(7990, () => {
    console.log(`http://127.0.0.1:7990`)
})
```

### 调用 API

将函数参数通过 GET 参数 `args` 以 JSON 数组格式传入。

```
http://127.0.0.1:7990/magazine/getList?args=[11,0,5]
http://127.0.0.1:7990/book/getCategories?args=[]
```

详细的 API 信息，请参阅：[gede-book-api](https://github.com/iuroc/gede-book-api?tab=readme-ov-file#api-%E6%96%87%E6%A1%A3)