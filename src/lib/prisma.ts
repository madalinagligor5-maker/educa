// Prisma ORM Client Wrapper
let PrismaClientClass: any;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const prismaPkg = require("@prisma/client");
  PrismaClientClass = prismaPkg.PrismaClient || class MockPrisma {};
} catch {
  PrismaClientClass = class MockPrisma {};
}

const globalForPrisma = globalThis as unknown as { prisma: any };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClientClass();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
