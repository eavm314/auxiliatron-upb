const knex = require("knex");
const mySqlConfig = require("../config/knex-mysql");
const db = knex(mySqlConfig.development)

const getSubjects = async () => {
    try {
        const subjects = await db("subjects").select("*");
        const subjectsJson = subjects.map((row) => ({
          id: row.id,
          name: row.name,
          description: row.description,
          credits: row.credits,
          professor: row.professor,
        }));
        return subjectsJson;
      } catch (e) {
        console.error(e);
        return [];
      }
};

const getSubjectById = async (id) => {
    try {
        const subject = await db("subjects").where('id',id).first();
        const subjectJson = {
          id: subject.id,
          name: subject.name,
          description: subject.description,
          credits: subject.credits,
          professor: subject.professor,
        };
        return subjectJson;
      } catch (e) {
        console.error(e);
        return {};
      }
};

const createSubject = async (newSubject) => {
    try {
        await db("subjects").insert(newSubject).select("*");
        return newSubject;
      } catch (e) {
        console.error(e);
        return {};
      }
};

const updateSubject = async (id, subject) => {
    try {
        await db("subjects").where('id',id).update(subject);
        return id;
      } catch (e) {
        console.error(e);
        return {};
      }
};

const deleteSubject = async (id) => {
    try {
        await db("subjects").where('id',id).del();
        return id;
      } catch (e) {
        console.error(e);
        return 0;
      }
};

module.exports = {
    getSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
};