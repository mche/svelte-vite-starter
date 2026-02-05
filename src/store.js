import { writable } from 'svelte/store';
import { parse } from 'yaml';
///import axios from 'axios';

const store = {
    посты: writable([]),
    Foo(){
        let all;
        store.посты.update(old => all = old);
        return all;
    },
};

/*fetch('посты.json')
    .then(response => response.json())
    .then(посты => {
        store.посты.update(old => посты);
    });
 */

fetch('посты.yaml')
// fetch('https://raw.githubusercontent.com/mche/svelte-vite-starter/master/public/посты.yaml')
    .then(res => res.blob())
    .then(blob =>  blob.text())
///axios.get('https://raw.githubusercontent.com/mche/svelte-vite-starter/master/public/посты.yaml',
///          { responseType: 'blob' })
///    .then(resp => resp.data.text())
    .then(yamlAsString => {
      store.посты.update(old => parse(yamlAsString));  
    })
    .catch(err => console.log('посты.yaml error:', err))

export default store;