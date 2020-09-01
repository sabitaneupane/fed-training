let {
  listStudentsList,
  viewStudentDetails,
  createStudentList,
  updateStudentList,
  deleteStudentList
} = require('../controllers/student.controllers');

let express = require('express');
let router = express.Router();

router.get('/', listStudentsList);
router.get('/:id', viewStudentDetails);
router.post('/create', createStudentList);
router.put('/update/:id', updateStudentList);
router.delete('/delete/:id', deleteStudentList);

module.exports = router;
