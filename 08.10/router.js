import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/students', async (req, res) => {
    const students = await prisma.students.findMany();
    res.json(students);
});

router.get('/subjects', async (req, res) => {
    const sub = await prisma.subjects.findMany();
    res.json(sub);
});

router.get('/students/:id', async (req, res) => {
    const id = Number(req.params.id);
    const getUniqueStudents = await prisma.students.findUnique({
        where: {
            id: id,
        },
    });

    if (getUniqueStudents) res.json(getUniqueStudents);
    else {
        res.sendStatus(404);
        return 0;
    }
});

router.get('/subjects/:id', async (req, res) => {
    const id = Number(req.params.id);
    const getUniqueSubjects = await prisma.subjects.findUnique({
        where: {
            id: id,
        },
    });

    if (getUniqueSubjects) res.json(getUniqueSubjects);
    else {
        res.sendStatus(404);
        return 0;
    }
});

export default router;