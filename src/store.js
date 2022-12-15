import {reactive} from 'vue'

export const store = reactive ({
    characterList: [],
    apiUrl: 'https://rickandmortyapi.com/api/character?page=13',
    filterText: '',
    statusApi: 'status',
});