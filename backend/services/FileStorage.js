class FileStorage
{
    createBaseFolder()
    {
        dir ='./uploads';
        var fs = require('fs');
        if(!fs.existsSync(dir))
        {
            fs.mkdir(dir);
            console.log("Folder is created!");
        }
    }
    saveFile(dirname,fileName)
    {
        const fs = require('fs');
        const path = require('path');
        fs.writeFileSync(path.join(dirname,fileName),"UTF8", (err) => {
            if(err) throw err;
            console.log("File Uploaded.");
        })
    }

}
module.exports = new FileStorage();
