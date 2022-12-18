const document = require("./Document")
class DocumentStrategy extends document
{
    constructor()
    {
        super();
        this._strategy=null;

    }

    addStrategy(strategy)
    {
        this._strategies = [...this._strategies,strategy];
    }
    getStrategy(name)
    {
        return this._strategies.find(strategy => strategy.name = name);
    }
    approve(callback)
    {
        this._strategy.approve();
        return callback;
    }
}