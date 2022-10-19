import { Item } from "../types/Item";

export const getCurrentDate = (): string =>{
let now = new Date();
return `${now.getFullYear()}-${now.getMonth()}`
};

export const  filterListByMonth  = (list: Item[], date: string): Item[]  =>{
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for( let i in list){
        if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() === parseInt(month)){
            newList.push(list[i]);
        }
    }

    return newList
};

export function formatDate(date: Date): string{
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()

let fullDateString = `${day < 10 ? `0${day}`:`${day}`}/${month < 10 ? `0${month}`:`${month}`}/${year} `

return fullDateString
}

export const formatCurrentMonth = (date: string): string =>{
const [year, month] = date.split('-')
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const currentMonth = `${months[parseInt(month)]} de ${year}`
return currentMonth
}

export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }
