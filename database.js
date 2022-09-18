import pg from 'pg'
const {Client} = pg

const client = new Client({
    host: 'localhost',
    user: 'teodor',
    port: 5432,
    password: 'freebird',
    database: 'carshop'
})

export const getCarmodels = async () => {
    const data = await new Promise((resolve, reject) => {
        client.query('select * from carmodels', (err, res) => {
            if(!err){
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err.message)
            }
            client.end;
        })
    });
    return data
}

// export const getCar = async (selectedCar) => {
//     const data = await new Promise((resovle, reject) => {
//         client.query('select id, brand, model, price where id = $1', [selectedCar], (err, res) => {
//             if(!err){
//                 resolve(res.rows)
//             } else {
//                 console.log(err.message);
//                 reject(err.message)
//             }
//             client.end;
//         })
//     })
// }