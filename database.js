import pg from 'pg'
const {Client} = pg

const client = new Client({
    host: 'localhost',
    user: 'teodor',
    port: 5432,
    password: 'freebird',
    database: 'carshop'
})

client.connect()

export const getCarmodels = async () => {
    try{
        const data = await new Promise((resolve, reject) => {
            client.query('select * from carmodels', (err, res) => {
                if(!err){
                    resolve(res.rows)
                } else {
                    console.log(err.message);
                    reject(err.message)
                }
            })
        });
        return data
    } catch (e){
        console.log(e)
    }
}

export const getCar = async (carId) => {
    try{
        const result = await new Promise((resolve, reject) => {
            client.query('select * from carmodels where id = $1', [carId], (err, res) => {
                if(!err){
                    resolve(res.rows)
                    client.end;
                } else {
                    console.log(err.message);
                    reject(err.message)
                }
            })
        });
        return result
    } catch (e){
        console.log(e)
    }
}
