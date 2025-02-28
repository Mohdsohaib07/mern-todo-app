const express = require('express');
const {get,post,put,deletee, deleteAll} = require('../controllers/todoController');
const router = express.Router();

router.get('/',get);

router.post('/', post );
router.put('/:id', put);

router.delete('/:id', deletee );

router.delete('/',deleteAll);

exports.router = router;

