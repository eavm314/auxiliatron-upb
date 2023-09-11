const { getSubjects, getSubjectById, updateSubject, deleteSubject, createSubject } = require("../repository/subjectRepository");

const getSubjectService = () => {
    const subjects = getSubjects();
    return subjects;
};

const getSubjectByIdService = (id) => {
    const subject = getSubjectById(id);
    return subject;
};

const createSubjectService = (newSubject) => {
    const subject = createSubject(newSubject);
    return subject;
};

const updateSubjectService = (id, newSubject) => {
    const subject = updateSubject(id, newSubject);
    return subject;
};

const deleteSubjectService = (id) => {
    const subjectId = deleteSubject(id);
    return subjectId;
};

module.exports = {
    getSubjectService,
    getSubjectByIdService,
    createSubjectService,
    updateSubjectService,
    deleteSubjectService
};
