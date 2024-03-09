import request from 'supertest';
import { app } from '../app';
test('GET /coffee should return correct object', async () => {
    const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'Latte' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Latte',
    });

    const res2 = await request(app)
        .get('/coffee')
        .query({coffeeName: 'Black'});
    expect(res2.statusCode).toEqual(200);
    expect(res2.body).toEqual({
        drinkType: 'Coffee',
        name: 'Black',
    })
});

test("GET /coffee should return a latte object if no prams passed", async () =>{
    const res = await request(app)
        .get('/coffee')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Latte',
    });
})