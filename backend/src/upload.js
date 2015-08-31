import { Router } from 'express'
import multer     from 'multer'

let upload = multer({ dest: 'uploads/' })

let router = new Router
export default router

router.post('/upload', upload.single('image'), (req, res, next) => {
  res.json({foo: 'bar'})
})
