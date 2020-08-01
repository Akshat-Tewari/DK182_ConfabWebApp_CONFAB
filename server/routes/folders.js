const express = require('express');
const router = express.Router();

const FoldersController = require('../controllers/folder');

router.get('' , FoldersController.getAll);

router.get('/:slug' , FoldersController.getBySlug);

router.post('/new' , FoldersController.createFolder);

router.delete('/:slug' , FoldersController.deleteBySlug) ;

router.patch('/:slug' , FoldersController.updateBySlug) ;

module.exports = router;