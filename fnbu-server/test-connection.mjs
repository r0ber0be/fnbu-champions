import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('Connected to database');
  } catch (e) {
    console.error('Error connecting to database:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
