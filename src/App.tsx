import { ReactElement, useEffect, useState } from 'react';
import  * as C from './app.styles';
import {Item} from './types/Item';
import {categories} from './data/categories';
import {items} from './data//items';
import { filterListByMonth, getCurrentDate } from './helpers/dateFilter';
import TableArea from './components/TableArea';
import InfoArea from './components/InfoArea';
import { InputArea } from './components/InputArea';
 
function App(): ReactElement {
const [list, setList] = useState<Array<Item>>(items);
const [filteredList, setFilteredList] = useState<Array<Item>>([])
const [currentMonth, setCurrentMonth] = useState<string>(getCurrentDate());
const [income, setIncome] = useState<number>(0);
const [expense, setExpense] = useState<number>(0);


useEffect(()=>{

  let incomeCount = 0;
  let expenseCount = 0;

  for(let i in filteredList){
    if(categories[filteredList[i].category].expense){
      expenseCount += filteredList[i].value
    }else{
      incomeCount += filteredList[i].value
    }

  }
  setIncome(incomeCount)
  setExpense(expenseCount)
},[filteredList])

const handleAddItem = (item: Item) => {
  let newList = [...list];
  newList.push(item);
  setList(newList);
}


useEffect(()=>{
setFilteredList(filterListByMonth(list, currentMonth))

},[list, currentMonth])

const HandleMonthChange = (date: string)=>{
  setCurrentMonth(date)
}

  return (
    <C.Container>
        <C.Header>
          <C.HeaderText> Sistema Financeiro </C.HeaderText>
        </C.Header>
        <C.Body> 
          

      <InfoArea income={income} expense={expense} currentMonth={currentMonth} HandleMonthChange={HandleMonthChange} /> 
        
        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />


        </C.Body>
    </C.Container>
  );
}

export default App;
