import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from '../database/database';


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM public.users');

        for(let i=0; i<response.rows.length; i++){
            console.log(response.rows[i].name, ' ', response.rows[i].email);
        }

        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error.');
    }
}


export const getPersonas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM personas.persona');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error.');
    }
}


export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const { name, email } = req.body;
    const reponse: QueryResult = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
    return res.json({
        message: "Usuario creado correctamente.",
        body: {
            user: {
                name,
                email
            }
        }
    });
}

export const updateUser = async(req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])

    return res.json(`Usuario con id ${id} actualizado satisfactoriamente.`);
}

export const deleteUser = async(req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users WHERE id=$1', [id]);
    return res.json(`User ${id} eliminado.`);
}