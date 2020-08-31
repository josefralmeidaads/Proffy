import {Request, Response} from 'express';
import db from '../database/connections';

export default class ConnectionsControllers {
    async index(request: Request, response: Response){
        try{
                const totalConexoes = await db('connections').count('* as total');

                const {total} = totalConexoes[0];

                return response.status(302).json({message: 'Total de Conexões ' + total})
        }catch(error){
            console.log(error)
            return response.status(400).json({message: 'Nenhum resulrado encontrado!'})
        }
    }
    
    async create(request: Request, response: Response){
        const {user_id} = request.body;

        try{
            await db('connections').insert({
                user_id

            })
            
            return response.status(201).json({message: 'Conexão Criado com Sucesso'})
        }catch(error){
            return response.status(400).json({message: 'Não foi possível criar conexão'})
        }
    }
}