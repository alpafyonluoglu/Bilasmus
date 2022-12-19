const ds = require("./DocumentStrategy")
const document = require("./Document")
const db = require("../controllers/DatabaseController")
const createError = require("http-errors");
class InstructorStrategy extends ds
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
            //for incoming student
            if(d.getSigned() == 0 && d.getOwnerId() > 22220000 && d.getOwnerId() << 222220010)
            {
                d.setSigned(5);
            }
            //for outgoing student
            else if (d.getSigned() == 2 )
            {
                // course request handling is different? not sure
                if(d.getType() == "cr")
                {
                    d.setSigned(4);
                }
                // if not, enter the next phase
                else
                {
                    d.setSigned(3);
                }
            }
            else
            {
                return callback(createError(404, "Document cannot be approved: "));
            }
        });

    }
}