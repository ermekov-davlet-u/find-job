import { Request, Response, Router } from "express"
import { IOperation } from "../../entity/dto/operation";
import Operation from "../../entity/Operation";

const operationRouter = Router();

operationRouter.post('', async(req: Request, res: Response) => {
    const body = req.body
    const op = await Operation.create(body)
    op.save()

    res.send({
        op
    })
})


export default operationRouter