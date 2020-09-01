let studentSchema = require('../Models/student.models');

exports.listStudentsList = (req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  })
}

exports.viewStudentDetails = (req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  })
}

exports.createStudentList = (req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  })
}

exports.updateStudentList = (req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  })
}

exports.deleteStudentList = (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
}
