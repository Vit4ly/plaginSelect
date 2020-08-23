import {Select} from './Select/Select'
import './Select/style.scss'

const select = new Select('#select', {
placeholder: 'Выберете элемент',
    // selectedId: '3',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'},
    ],
    onSelect(item) {
    console.log('selected Item', item)
    }

})


window.s = select
