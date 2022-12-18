const ds = require("./DocumentStrategy")
const document = require("./Document")
const db = require("../controllers/DatabaseController")
const createError = require("http-errors");
class InternationalStudentOfficeStrategy extends ds
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
            if(d.getSigned() > 4)
            {
                d.setSigned(6);
            }
            else
            {
                return callback(createError(404, "Document cannot be approved: "));
            }
        });
    }
}
