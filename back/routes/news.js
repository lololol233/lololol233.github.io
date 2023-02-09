import { Router } from 'express'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import { jwt } from '../middleware/auth.js'
import { createNew, getAllNews, getNew, editNew, getpostNews } from '../controllers/news.js'

const router = Router()

router.post('/', content('multipart/form-data'), jwt, admin, upload, createNew)
router.get('/all', jwt, admin, getAllNews)
router.get('/', getpostNews)
router.get('/:id', getNew)
router.patch('/:id', content('multipart/form-data'), jwt, admin, upload, editNew)

export default router
