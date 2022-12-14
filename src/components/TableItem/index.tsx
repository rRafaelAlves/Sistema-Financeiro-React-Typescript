import * as C from './styles'
import {Item} from '../../types/Item'
import {formatDate} from '../../helpers/dateFilter'
import {categories} from '../../data/categories'

type Props ={
item: Item
}

export function TableItem({item}: Props){
    return(
        <C.TableLine>
            <C.TableColumn> 
                {formatDate(item.date)}
            </C.TableColumn>
            <C.Category color={categories[item.category].color}>
            <C.TableColumn> 
                {categories[item.category].title}
            </C.TableColumn>
            </C.Category>
            <C.TableColumn> 
                {item.title}
            </C.TableColumn>
            <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
            <C.TableColumn> 
                R$ {item.value}
            </C.TableColumn>
            </C.Value>
        </C.TableLine>
    )
}