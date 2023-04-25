import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}


//hot reloading on Next.js13 can cause multiple instances of a prisma client, conditional below prevents bug
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client;