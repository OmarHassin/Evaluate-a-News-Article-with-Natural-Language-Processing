const request = require('supertest');


describe('The page should be running', () => {
    test('Page resonse successfully.', async () => {
        const response =  request('http://localhost:5500').get('/');
        expect(response.body.time).toBe('now'); 
    });
});



