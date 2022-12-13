class FileStorage
{
    createBaseFolder()
    {
        var fs = require('fs');
        var dir ='./uploads';
        if(!fs.existsSync(dir))
        {
            fs.mkdir(dir);
            console.log("Folder is created!");
        }
    }
    saveFile(__dirname,fileName)
    {
        const fs = require('fs');
        const path = require('path');
        fs.writeFileSync(path.join(__dirname,fileName),"UTF8", (err) => {
            if(err) throw err;
            console.log("File Uploaded.");
        })
    }



}
module.exports = new FileStorage();
