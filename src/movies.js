import { db } from './connectDb.js'

export function getMovies(req, res){
    db.query("SELECT * FROM movies", (err, results) => {
        if(err){
            res.status(500).send( {success: false, message: err} )
            return
        }
        res.send(results)
    })
}