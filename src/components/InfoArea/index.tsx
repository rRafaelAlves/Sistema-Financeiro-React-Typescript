import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItems'
import * as C from './styles'

type Props = {
    currentMonth: string
    HandleMonthChange: (newMonth: string)=> void
    income: number
    expense: number
}

export default function InfoArea({currentMonth, HandleMonthChange, income, expense}: Props){

const HandleMonth = (change: string) =>{
const [year, month] = currentMonth.split('-');
const currentDate = new Date(parseInt(year), parseInt(month), 1)
currentDate.setMonth(change === 'next' ? currentDate.getMonth() + 1: currentDate.getMonth() - 1)
HandleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)

}

    return(
        <C.Container>
            <C.AreaMonth>
                <C.MonthArrow onClick={()=>HandleMonth('prev')}>
                    ⬅
                </C.MonthArrow>
                <C.MonthTitle> {formatCurrentMonth(currentMonth)} </C.MonthTitle>
                <C.MonthArrow onClick={()=>HandleMonth('next')}>
                    ➡
                </C.MonthArrow>

            </C.AreaMonth>
            <C.ResumeArea>
                <ResumeItem title="Receita" value={income} />
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem title="Balanço" value={income - expense} color={ (income -  expense > 0 ? 'green' : 'red')} />
            </C.ResumeArea>
        </C.Container>
    )
}