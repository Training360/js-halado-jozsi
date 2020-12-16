// Make a Promise.
const myPromise = () => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res('Én vagyok a jó királyfi.');
        }, 2000 );
    });
};

/* myPromise.then(
    sentence => console.log(sentence)
).catch(
    err => console.error(err)
); */

const init = async () => {
    const s = await myPromise();
    const s2 = await myPromise();
    const s3 = await myPromise();
    console.log(s, s2, s3);
    console.timeEnd('ff');
};

init();

console.time('ff');
console.log('Program is running...');