import pg from 'pg'
const {Client} = pg

const client = new Client({
    host: 'localhost',
    user: 'teodor',
    port: 5432,
    password: 'freebird',
    database: 'teodor'
})

client.query('select * from carmodels', (err, res) => {
    console.log(res, err)
})

export const getCarmodels = async () => {
    try{
        const data = await new Promise((resolve, reject) => {
            try {
                client.query('select * from carmodels', (err, res) => {
                    console.log("hoppsan")
                    if(!err){
                        console.log("Hit")
                        resolve(res.rows)
                    } else {
                        console.log(err.message);
                        reject(err.message)
                    }
                    client.end;
                })
            } catch (e){
                console.log(e)
            }
        });
        return data
    } catch (e){
        console.log(e)
    }
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