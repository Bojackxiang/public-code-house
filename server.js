const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    // ! the following code can help the nextjs load to koa
    // ! 下面这一段代码，决定了next项目是否可以挂载到 koa 上面
    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        ctx.response = false
        next();
    })

    server.use(router.routes())
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
