import DocumentStrategy from '../models/DocumentStrategy';
const document = require("./Document")
const db = require("../controllers/DatabaseController")
const createError = require("http-errors");
class OutgoingStudentStrategy extends DocumentStrategy
{
    constructor(name,handler)
    {
        super();
        this._name = name;
        this._handler = handler;
    }
    approve(callback)
    {
        let d = new document();
        db.update(d,result => {
            if(result instanceof Error)
            {
                return callback(createError(404,"document cannot be proceeded."))
            }
            if(d.getSigned() === 0)
            {
                d.setSigned(1);
            }
            else
            {
                return callback(createError(404, "Document cannot be approved: "));
            }
        });
    }
}