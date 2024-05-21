import { Response } from 'express'
import { Router } from 'express'
import { Book, Magazine } from 'gede-book-api'

/** 发送失败响应 */
export function sendRes(res: Response, success: false, message: string | null): void
/** 发送成功响应，不包 `data` 数据 */
export function sendRes(res: Response, success: true, message: string | null): void
/** 发送成功响应，包含 `data` 数据 */
export function sendRes(res: Response, success: true, message: string | null, data: any): void
export function sendRes(res: Response, success: boolean, message: string | null, data?: any) {
    if (success && !message) message = '操作成功'
    else if (!success && !message) message = '操作失败'
    res.send({
        success,
        message,
        data
    })
}

export const errorHandler = (res: Response, error: unknown) => {
    if (error instanceof TypeError) sendRes(res, false, '参数类型错误')
    else if (error instanceof Error) sendRes(res, false, error.message)
}

export const handlerApi = (router: Router, cls: Book | Magazine) => {
    type Property = keyof typeof cls
    Object.getOwnPropertyNames(cls)
        .filter(property => typeof cls[property as Property] == 'function')
        .forEach(property => {
            const method = async (...args: any[]) => (cls[property as Property] as any)(...args)
            router.get(`/${property}`, (req, res) => {
                try {
                    const args = JSON.parse(req.query.args as string) as string[]
                    method(...args)
                        .then(data => {
                            sendRes(res, true, null, data)
                        })
                        .catch(error => errorHandler(res, error))
                } catch {
                    errorHandler(res, new Error('请输入正确的 args 参数'))
                }
            })
        })
}
