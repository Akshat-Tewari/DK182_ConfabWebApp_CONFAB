const Folder = require('../models/folder');

exports.getAll = (req , res) => {

    Folder.find({} , (err , foundFolders) => {
        if(err){
            return res.json({"error" : "finding all Folders"})
        }

        return res.json(foundFolders);
    })
};


exports.getBySlug =  (req , res) => {
   const slug = req.params.slug;
  
   Folder.findOne({slug} , (err , foundFolder) => {
       if(err){
           return res.json({"error" : "in find by slug"});
       }
       return res.json(foundFolder);
   })
};

exports.createFolder = async (req , res) => {
    const FolderData = req.body ;

    const newFolder = new Folder(FolderData) ;

    await Folder.init();
    await Folder.create(newFolder , (err , createdFolder) => {
          if(err){
              return res.json(err);
          }

         return res.json(createdFolder);
    })
};


exports.deleteBySlug =  (req , res) => {
    const Slug = req.params.slug ;

    Folder.findOne({Slug} , (err , foundFolder ) => {
        if(err){
            return res.json({"error" : "in finding/delete Folder"});
        }

        foundFolder.remove((err) => {
           if(err){
            return res.json({"error" : "in deleting Folder"});
           }
        })

        return res.json({"delete" : "success"});
    })

};

exports.updateBySlug =  (req , res) => {
    const Slug = req.params.slug ;

    Folder.findOne({Slug} , (err , foundFolder ) => {
        if(err){
            return res.json({"error" : "in finding/delete Folder"});
        }

        return res.json({"Update" : "success"});
    })

};

