import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query"] });
const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({ data: { name: "Kittu" } });
  //   const users = await prisma.user.findMany();
  // await prisma.user.deleteMany();

  // #createMany #
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Kiran",
  //       email: "Kiran@test.com",
  //       age: 33,
  //       // userPreference: {
  //       //   create: {
  //       //     emailUpdates: true,
  //       //   },
  //       // },
  //     },
  //     {
  //       name: "Kittu",
  //       email: "Kittu@test.com",
  //       age: 30,
  //     },
  //     {
  //       name: "Sam",
  //       email: "Sam@test.com",
  //       age: 32,
  //     },
  //     {
  //       name: "Sam",
  //       email: "Sam12@test.com",
  //       age: 35,
  //     },
  //     {
  //       name: "Deny",
  //       email: "Deny@test.com",
  //       age: 34,
  //     },
  //   ],
  //   // skipDuplicates: true,
  //   // select: {
  //   //   name: true,
  //   //   userPreference: { select: { id: true } },
  //   // },
  //   // U can use either of one select or include
  //   // include: {
  //   //   userPreference: true,
  //   // },
  // });
  // console.log(users);

  // #findUnique #
  // const user = await prisma.user.findUnique({
  //   where: {
  //     // email: "Sam@test.com",
  //     age_name: {
  //       age: 30,
  //       name: "Kittu",
  //     },
  //   },
  // });

  // #findFirst #
  // const user = await prisma.user.findFirst({
  //   where: {
  //     // email: "Sam@test.com",
  //     name: "Kittu",
  //   },
  // });

  // #findMany #
  // const user = await prisma.user.findMany({
  //   where: {
  //     // name: "Sam",
  //     // name: { equals: "Kittu" },
  //     // name: { not: "Kittu" },
  //     // name: { notIn: ["Kittu", "Sam"] },
  //     // age: { lt: 31 },
  //     // age: { gt: 31 },
  //     // email: { contains: "@test.com" },
  //     // email: { startsWith: "Sam" },
  //     // name: { endsWith: "m" },
  //     // # OR operator
  //     // OR: [
  //     //   {
  //     //     email: { startsWith: "Sam" },
  //     //   },
  //     //   {
  //     //     age: { lt: 31 },
  //     //   },
  //     // ],

  //     // # AND operator
  //     // AND: [
  //     //   {
  //     //     email: { startsWith: "Sam" },
  //     //   },
  //     //   {
  //     //     age: { gt: 31 },
  //     //   },
  //     // ],
  //     // # NOT operator
  //     // NOT: {
  //     //   email: { startsWith: "Sam" },
  //     // },
  //     // #
  //     // userPreference: {
  //     //   emailUpdates: true,
  //     // },
  //     // #
  //     writtenPosts: {
  //       // every: {
  //       //   createdAt: new date(),
  //       // },
  //       // every: {
  //       //   title: "Test",
  //       // },
  //       none: {
  //         title: "Test",
  //       },
  //       some: {
  //         title: "Test",
  //       },
  //     },
  //   },
  //   // distinct: ["name", "age"],
  //   // take: 1,
  //   // skip: 1,
  //   orderBy: {
  //     age: "desc",
  //   },
  // });
  // console.log(user);
  // # post
  // const post = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       // is: {
  //       //   email: { endsWith: "@test.com" },
  //       // },
  //       isNot: { age: 30 },
  //     },
  //   },
  // });
  // console.log(post);

  // # update
  const user = await prisma.user.update({
    where: {
      email: "Kittu30@test.com",
    },
    data: {
      // email: "Kittu30@test.com",
      // age: { increment: 1 },
      // age: { decrement: 1 },
      // age: { multiply: 10 },
      age: { divide: 10 },
    },
  });

  // #updateMany
  // const user = await prisma.user.updateMany({
  //   where: {
  //     name: "Sam",
  //   },
  //   data: {
  //     name: "Smily Sam",
  //   },
  // });
  // const user = await prisma.user.findMany({
  //   where: {
  //     name: "Smily Sam",
  //   },
  // });
  console.log(user);
}
main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
