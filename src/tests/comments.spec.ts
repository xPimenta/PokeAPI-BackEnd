import app from "src/app";
import supertest from "supertest";

// TEST GET COMMENTS //
describe('Get all comments', () => {
	it('should return 200', async () => {
		const response = await supertest(app).get('/comments')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon comments with limit and page', () => {
	it('should get correct comments', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=10&page=1')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon comments with limit', () => {
	it('should get correct comments', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=10')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon comments with page', () => {
	it('should get correct comments', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&page=1')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon with NaN limit', () => {
	it('should return 400', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=test#&page=1')

		expect(response.status).toBe(400)
	})
})

describe('Get pokemon with NaN page', () => {
	it('should return 400', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=10&page=test')

		expect(response.status).toBe(400)
	})
})

describe('Get pokemon with negative page', () => {
	it('should return 200', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=10&page=-1')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon with negative limit', () => {
	it('should return 200', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=-1&page=1')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon with negative limit and page', () => {
	it('should return 200', async () => {
		const response = await supertest(app).get('/comments?pokemon=pikachu&limit=-1&page=-1')

		expect(response.status).toBe(200)
	})
})

describe('Get pokemon that doesnt exist', () => {
	it('should return 404', async () => {
		const response = await supertest(app).get('/comments?pokemon=notapokemon&limit=10&page=1')

		expect(response.status).toBe(404)
	})
})

describe('Get pokemon that exists and doesnt have comments', () => {
	it('should return 404', async () => {
		const response = await supertest(app).get('/comments?pokemon=kangaskhan&limit=10&page=1')

		expect(response.status).toBe(404)
	})
})

// TEST POST COMMENTS // 

const commentValues = {
	name: 'test',
	email: 'teste@gmail.com',
	comment: 'test',
	pokemon: 'pikachu'
}

describe('Post correct comment', () => {
	it('should post a comment', async () => {
		const response = await supertest(app).post('/postComment').send(commentValues)

		expect(response.status).toBe(201)
	})
})

describe('Post comment without name', () => {
	it('should return 400', async () => {
		const response = await supertest(app).post('/postComment').send({...commentValues, name: ''})

		expect(response.status).toBe(400)
	})
})

describe('Post comment without email', () => {
	it('should return 400', async () => {
		const response = await supertest(app).post('/postComment').send({...commentValues, email: ''})
		
		expect(response.status).toBe(400)
	})
})

describe('Post comment without comment', () => {
	it('should return 400', async () => {
		const response = await supertest(app).post('/postComment').send({...commentValues, comment: ''})

		expect(response.status).toBe(400)
	})
})

describe('Post comment without pokemon', () => {
	it('should return 400', async () => {
		const response = await supertest(app).post('/postComment').send({...commentValues, pokemon: ''})

		expect(response.status).toBe(400)
	})
})

describe('Post comment with invalid email', () => {
	it('should return 400', async () => {
		const response = await supertest(app).post('/postComment').send({...commentValues, email: 'test'})

		expect(response.status).toBe(400)
	})
})

describe('Post comment with invalid pokemon', () => {
	it('should return 400', async () => {
		const response = await supertest(app).post('/postComment').send({...commentValues, pokemon: 'test'})

		expect(response.status).toBe(400)
	})
})

