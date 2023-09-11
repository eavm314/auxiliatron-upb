const { getSubjectService, getSubjectByIdService, createSubjectService, deleteSubjectService, updateSubjectService } = require("../services/subjectService");

const getSubjectController = async (req, res) => {
    try {
        const subjects = await getSubjectService();
        return res.status(200).json({
            success: true,
            message: "Subjects retrieved sucessfully",
            data: subjects
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retrieving subjects",
            error: error.message
        });
    }
};

const getSubjectByIdController = async (req, res) => {
    // console.log(req.params.id);
    try {
        const subject = await getSubjectByIdService(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Subject retrieved sucessfully",
            data: subject
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retrieving subject",
            error: error.message
        });
    }
};

const createSubjectController = async (req, res) => {
    try {
        const subject = await createSubjectService(req.body);
        return res.status(200).json({
            success: true,
            message: "Subject created sucessfully",
            data: subject
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating subject",
            error: error.message
        });
    }
};

const updateSubjectController = async (req, res) => {
    try {
        const subject = await updateSubjectService(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: "Subject updated sucessfully",
            data: subject
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating subject",
            error: error.message
        });
    }
};

const deleteSubjectController = async (req, res) => {
    try {
        const subjectId = await deleteSubjectService(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Subject deleted sucessfully",
            data: subjectId
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting subject",
            error: error.message
        });
    }
};

module.exports = {
    getSubjectController,
    getSubjectByIdController,
    createSubjectController,
    updateSubjectController,
    deleteSubjectController
};