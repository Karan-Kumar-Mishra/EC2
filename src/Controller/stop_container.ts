
import Services from "../Services";
import express, { Request, Response } from "express"
export default function stop_container(req: Request, res: Response) {
    if ((!req.body) || (!req.body.vm_id)) {
        res.json({
            status: "error",
            msg: "Please the id for container ?"
        })
    }
    console.log("while stoping => ", req.body);
    Services.stop_container(req.body.user_id, req.body.vm_id).then(() => {
        res.json({
            status: "ok"
        })
    }).catch(() => {
        res.json({
            status: "error",
        })
    })
}