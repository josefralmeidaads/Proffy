const convertHourToMinutes = (time: string) => {
   // separando elementos pelo : e convertendo em um array e mapeando o array de string transformando
   //em minutos cada elemento, pois assim converto horas e minutos para tipo number 
   const [hour, minutes] = time.split(':').map(Number);

   const timeInMinutes = (hour * 60) + minutes;

   return timeInMinutes;
}

export default convertHourToMinutes;