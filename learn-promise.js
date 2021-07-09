var p1 = new Promise(function (resolve, reject) {
    resolve('one');
});
const tde = async () => {
    console.log('fefefefefe')
}
var p2 = new Promise(function (resolve, reject) {
    reject('two was rejected');
}).catch((err) => {
    console.log(err)
});

var p3 = new Promise(function (resolve, reject) {
    resolve('three');
});
tde().then((data) => console.log)

Promise.all([p1, p2, p3])
    .then(function (res) {
        console.log('Promise.all', res);
    })
    .catch(function (err) {
        console.error('Promise.all error', err);
    });

console.log('dededede')

//Promise.all [ 'one', 'two was rejected', 'three' ]

const d = [
    '6030aeacb899fc58f14a02e2',
    '60408c7050312357ca037032',
    '60408c7050312357ca037032',
  ]
for (let i = 0; i < d.length; i++) {
    console.log(d[i])
    console.log(d[i] in d)
} 
