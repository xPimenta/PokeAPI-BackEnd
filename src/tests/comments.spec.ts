//import app from "src/app.js"
//import supertest from "supertest"
//import { prisma } from "src/config/database.js"

//// TEST GET COMMENTS //

//const getObjectFactory = () => {
//  const object = {
//    id: 1,
//    name: "Test",
//    email: "tests@gmail.com",
//    comment: "Tests",
//    pokemon: "pikachu",
//    pokeImageUrl: "Test",
//    createdAt: expect.any(String),
//  }
//  return object
//}

//describe("GET /comments", () => {
//  beforeAll(async () => {
//    await prisma.$connect()
//	await prisma.$executeRaw`TRUNCATE comments RESTART IDENTITY`
//  })
//  beforeEach(async () => {
//    await prisma.$executeRaw`TRUNCATE comments RESTART IDENTITY`
//    await prisma.comments.create({
//      data: {
//        name: "Test",
//        email: "tests@gmail.com",
//        comment: "Tests",
//        pokemon: "pikachu",
//        pokeImageUrl: "Test",
//      },
//    })
//  })

//  describe("Get all comments", () => {
//    it("should return 200", async () => {
//      const sut = await supertest(app).get("/comments")
//      const asseart = 200

//      expect(sut.status).toBe(asseart)
//      expect(sut.body).toEqual([getObjectFactory()])
//    })
//  })

//  describe("Get pokemon comments with limit and page", () => {
//    it("should get correct comments", async () => {
//      const sut = await supertest(app).get("/comments?pokemon=pikachu&limit=10&page=1")
//      const asseart = 200

//      expect(sut.status).toBe(asseart)
//      expect(sut.body).toEqual([getObjectFactory()])
//    })
//  })

//  describe("Get pokemon comments with limit", () => {
//    it("should get correct comments", async () => {
//      const sut = await supertest(app).get("/comments?pokemon=pikachu&limit=10")
//      const asseart = 200

//      expect(sut.status).toBe(asseart)
//      expect(sut.body).toEqual([getObjectFactory()])
//    })
//  })

//  describe("Get pokemon comments with page", () => {
//    it("should get correct comments", async () => {
//      const sut = await supertest(app).get("/comments?pokemon=pikachu&page=1")
//      const asseart = 200

//      expect(sut.status).toBe(asseart)
//      expect(sut.body).toEqual([getObjectFactory()])
//    })
//  })

//  describe("Get pokemon with NaN limit", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=pikachu&limit=test&page=1",
//      )

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Get pokemon with NaN page", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=pikachu&limit=10&page=test",
//      )

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Get pokemon with negative page", () => {
//    it("should return 200", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=pikachu&limit=10&page=-1",
//      )

//      expect(response.status).toBe(200)
//    })
//  })

//  describe("Get pokemon with negative limit", () => {
//    it("should return 200", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=pikachu&limit=-1&page=1",
//      )

//      expect(response.status).toBe(200)
//    })
//  })

//  describe("Get pokemon with negative limit and page", () => {
//    it("should return 200", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=pikachu&limit=-1&page=-1",
//      )

//      expect(response.status).toBe(200)
//    })
//  })

//  describe("Get pokemon that doesnt exist", () => {
//    it("should return 404", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=notapokemon&limit=10&page=1",
//      )

//      expect(response.status).toBe(404)
//    })
//  })

//  describe("Get pokemon that exists and doesnt have comments", () => {
//    it("should return 404", async () => {
//      const response = await supertest(app).get(
//        "/comments?pokemon=kangaskhan&limit=10&page=1",
//      )

//      expect(response.status).toBe(404)
//    })
//  })

//  afterAll(async () => {
//    await prisma.$executeRaw`TRUNCATE comments RESTART IDENTITY`
//    await prisma.$disconnect()
//  })
//})

//// TEST POST COMMENTS //

//const commentValues = {
//  name: "test",
//  email: "teste@gmail.com",
//  comment: "test",
//  pokemon: "pikachu",
//}

//const postObjectFactory = () => {
//  const object = {
//    id: 1,
//    name: "test",
//    email: "teste@gmail.com",
//    comment: "test",
//    pokemon: "pikachu",
//    pokeImageUrl:
//      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
//    createdAt: expect.any(Date),
//  }
//  return object
//}

//describe("ALL POST TESTS", () => {
//  beforeAll(async () => {
//    await prisma.$connect()
//	await prisma.$executeRaw`TRUNCATE comments RESTART IDENTITY`
//  })
//  beforeEach(async () => {
//    await prisma.$executeRaw`TRUNCATE comments RESTART IDENTITY`
//  })

//  describe("Post correct comment", () => {
//    it("should post a comment", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send(commentValues)

//      expect(response.status).toBe(201)

//      const result = await prisma.comments.findMany()
//      expect(result).toEqual([postObjectFactory()])
//    })
//  })

//  describe("Post comment without name", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send({ ...commentValues, name: "" })

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Post comment without email", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send({ ...commentValues, email: "" })

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Post comment without comment", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send({ ...commentValues, comment: "" })

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Post comment without pokemon", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send({ ...commentValues, pokemon: "" })

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Post comment with invalid email", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send({ ...commentValues, email: "test" })

//      expect(response.status).toBe(400)
//    })
//  })

//  describe("Post comment with invalid pokemon", () => {
//    it("should return 400", async () => {
//      const response = await supertest(app)
//        .post("/postComment")
//        .send({ ...commentValues, pokemon: "testss" })

//      expect(response.status).toBe(400)
//    })
//  })

//  afterAll(async () => {
//    await prisma.$executeRaw`TRUNCATE comments RESTART IDENTITY`
//    await prisma.$disconnect()
//  })
//})
