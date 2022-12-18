const ds = require("./DocumentStrategy")
const document = require("./Document");
const db = require("../controllers/DatabaseController")
const createError = require("http-errors");
class FacultyCommitteeBoardStrategy extends ds
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
        db.update(d, result => {
            if(result instanceof  Error)
            {
                return callback(createError(404,"File cannot be proceeded."));
            }
            if(d.getSigned() !== 5)
            {
                d.setSigned(5);
            }
            else
            {
                return callback(createError(404, "Document cannot be approved: "));
            }
        });
    }

}