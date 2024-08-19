import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function fnbuRoutes(app: FastifyInstance) {
  app.get('/api/fnbu/edicao-recente', async (req, res) => {
    const edicaoMaisRecente = await prisma.fnbuEdition.findFirst({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        partidas: {
          orderBy: {
            id: 'asc'
          }
        }
      }
    })

    if(!edicaoMaisRecente) {
      res.status(404).send({ message: 'Nenhuma edição no histórico.' })
    }

    res.status(200).send(edicaoMaisRecente)
  })

  app.get('/api/fnbu/edicoes', async (req, res) => {
    const edicoes = await prisma.fnbuEdition.findMany({
      orderBy: {
        createdAt: 'asc'
      },
      include: {
        partidas: {
          orderBy: {
            id: 'asc'
          }
        }
      }
    })

    if(!edicoes) {
      res.status(404).send({ message: 'Nenhuma edição no histórico.' })
    }
    
    res.status(200).send(edicoes)
  })
}