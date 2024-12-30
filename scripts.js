import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({ data: { name: "Kittu" } });
  //   const users = await prisma.user.findMany();
  const users = await prisma.user.deleteMany();

  console.log(users);
}
main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
