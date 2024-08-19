import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { fnbuRoutes } from "./routes/fnbu";

const app = fastify()

app.register(fastifyCors, {
  origin: ['https://localhost:3000']
})

app.register(fnbuRoutes)

app.register(fastifyJwt, {
  secret: 'briian-uchiha-fnbu'
})

app.listen({ port: 5000 })
  .then(() => { 
    console.log('Server iniciado na porta 5000'
  )}
)