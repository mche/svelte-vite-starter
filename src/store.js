import { writable } from 'svelte/store';
import { parse } from 'yaml';

const data = {
    посты: writable([]),
};

/*fetch('посты.json')
    .then(response => response.json())
    .then(посты => {
        data.посты.update(old => посты);
    });
 */

    ///fetch('посты.yaml')
    fetch('https://raw.githubusercontent.com/mche/svelte-vite-starter/master/public/посты.yaml')
    .then(res => res.blob())
    .then(blob => blob.text())
    .then(yamlAsString => {
      data.посты.update(old => parse(yamlAsString));  
    })
    .catch(err => console.log('посты.yaml error:', err))

export default data;