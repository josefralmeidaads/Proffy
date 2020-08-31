import {Request, Response} from 'express';
import db from '../database/connections';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesControllers{

    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time){
           return response.status(400).json({ message: 'Por favor, insira um tipo de filtro!'}) 
        } 

        const timeInMinutes = convertHourToMinutes(filters.time as string); // dizendo que o time da tabela é uma string

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`classes_id` = `classes`. `id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

        return response.json(classes);
    }
    
    async create(request: Request, response: Response){
    
        const { name, 
                avatar, 
                whatsapp, 
                bio, 
                subject, 
                cost, 
                schedule } = request.body;
    
        const trx = await db.transaction(); // usando a transação caso algum cadastro dê errado ele desfaz
        //todos os cadastros assegurando que não terei informação em uma tabela e outra sem vínculo
        
        try{
    
                   
            const insertUsersIds = await trx('users')
            .insert({ name, 
                avatar, 
                whatsapp, 
                bio
            });
                   
           const user_id = insertUsersIds[0];// pegando o primeiro userid
    
           const insertedClassesIds = await trx('classes')
           .insert({ subject, 
            cost, 
            user_id});
    
           const classes_id = insertedClassesIds[0];// pegando o id da aula que eu cadastrei
    
           const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    classes_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                };
           });
    
           await trx('class_schedule').insert(classSchedule);
    
           await trx.commit();// aplicando as alterações no banco
    
            return response.status(201).json({message: 'Sucesso no Cadastro!'});
        
        }catch(error){
            console.log(error);
            trx.rollback();// desfazendo transações no banco
            return response.status(400).json({message: 'Falha no Cadastro tente novamente'})
        }
        
    }
  
}


