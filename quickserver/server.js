import {PrismaClient} from './generated/prisma/client.js'
import cors from 'cors'
import express from "express"
import bcrypt from 'bcrypt'

const prisma =  new PrismaClient()
const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.json())

const criptografar = async(cpf) => {
    return await bcrypt.hash(cpf, 10)
}

const regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
const regexCpf = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
const regexNumero = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/
const regexChave  = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/

app.get("/users", async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({"message": "Busca concluida", "users": users})
    } catch (e) {
        res.status(500).json({"message": "Erro ao pegar os usuarios", "erro": e})
    }
})

app.get("/users/:id", async(req, res) => {
    const {id} = req.params

    const whereUser = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!whereUser) {
        return res.status(404).json({"message": "Usuario não encontrado"})
    }

    res.status(200).json({
        "message": "Usuario encontrado",
        "user": whereUser
    })
})

app.post("/users", async(req, res) => {
    try {
        const {name, email, cpf, chave, numero} = req.body

        if (!name || !email ||!cpf ||!chave || !numero) {
            return res.status(409).json({
                "message": "Os itens são obrigatorios"
            })
        }

        if (!regexEmail.test(email)) {
            return res.status(400).json({ message: "Email inválido" })
        }

        if (!regexCpf.test(cpf)) {
            return res.status(400).json({ message: "CPF inválido" })
        }

        if (!regexChave.test(chave)) {
            return res.status(400).json({ message: "Chave inválida" })
        }

        if (!regexNumero.test(numero)) {
            return res.status(400).json({ message: "Número inválido" })
        }

        const newcpf = await criptografar(cpf)

        const new_user = await prisma.user.create({
            data:{
                name,
                email,
                cpf: newcpf,
                chave,
                numero
            }
        })

        res.status(201).json({
            "message": "Usuario criado com sucesso",
            "user": new_user
        })

    }catch (e) {
        console.log("🔥 ERRO REAL:", e)

        return res.status(500).json({
            message: "Erro ao criar usuario !!!",
            error: e.message
        })
    }
})

app.put("/users/:id", async(req, res) => {
    
    try {
        const {id} = req.params
        const {name, email, cpf, chave, numero} = req.body
    
        const updateUser = await prisma.user.findUnique({
            where:{
                id: id
            }
        })

        if(!updateUser){
            return res.status(404).json({"message": "Erro ao buscar, user nao encontrado"})
        }
    
        if (!regexEmail.test(email)) {
            return res.status(400).json({ message: "Email inválido" })
        }

        if (!regexCpf.test(cpf)) {
            return res.status(400).json({ message: "CPF inválido" })
        }   

        if (!regexChave.test(chave)) {
            return res.status(400).json({ message: "Chave inválida" })
        }

        if (!regexNumero.test(numero)) {
            return res.status(400).json({ message: "Número inválido" })
        }
    
        const newcpf = await criptografar(cpf)
    
        const update_user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name,
                email,
                cpf: newcpf,
                chave,
                numero
            }
        })
    
        return res.status(200).json({
            "message": "Usuario atualizado !!!",
            "user": update_user
        })
        
    } catch (e) {
        res.status(500).json({
            "message": "Não foi possivel atualizar o usuario !!",
            "error": e
        })
    }
})

app.delete("/users/:id", async(req, res) => {
    const {id} = req.params

    const userSearch = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if(!userSearch){
        return res.status(404).json(
            {
                "message": "Usuario não encontrado !!"
            }
        )
    }

    await prisma.user.delete({
        where: {
            id: id
        },
    })

    return res.status(200).json({
        "message": "Usuario excluido",
        "user": userSearch
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("API inciada.🍹");
})