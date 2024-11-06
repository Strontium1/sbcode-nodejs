import express, { Request, Response } from "express";

import { single, multiple } from "../middlewares/upload.middleware";
import { handleUpload } from "../utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async (req: Request, res: Response) => {                  //key: file, value: image
    if (!req.file) return res.status(400).json({ message: "No uploaded file" });
    const fileBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const result = await handleUpload(fileBase64);
    res.status(200).json({ message: 'Sucess', result: result });
});

router.post("/upload/multiple", multiple, async (req: Request, res: Response) => {              //key: files, value: images
    if (!req.files) return res.status(400).json({ message: "No uploaded file" });
    const files = req.files as Express.Multer.File[];
    const uploadProc = files.map(
        file =>{
            const fileBase64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
            return handleUpload(fileBase64);
        }
    )

    const result = await Promise.all(uploadProc);
    res.status(200).json({
        message: 'Success',
        result: result
    })
});

export default router;
