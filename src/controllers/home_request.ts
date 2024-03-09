import { Request, Response } from 'express';

export const home = async (req: Request, res:Response) => {
    res.send('Welcome to the Drinks API!');
};

export const coffeeLover = async (req: Request, res:Response) => {
    res.send('I like coffee');
};