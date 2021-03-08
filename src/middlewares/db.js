const fs = require('fs');

const dbPath = `${process.cwd()}/src/db/db.json`;

const dbMiddleware = (req, res, next) => {

    console.log(dbPath)
    req.saveDb = (db, callback) => {

        if(Array.isArray(db)) {
            db = JSON.stringify(db);
        }

        fs.writeFile(dbPath, db, (err) => {
            if(err) { 
                return res.status(500).end('db error');
            }
            callback();
        });
    }

    fs.readFile(dbPath, 'utf-8', (err, file) => {
        if(err) { 
            return res.status(500).end('db error');
        }

        req.db = JSON.parse(file);
        next();
    });
    
}

module.exports = dbMiddleware;

