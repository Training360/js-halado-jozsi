// Read a json.
const namesJson = localStorage.getItem('names');
const names = JSON.parse(namesJson);

try {
    names.forEach(element => {
        console.log(element);    
    });
} catch(e) {
    console.error('An error: ', e);
}

console.log('done');