const Project = require('../models/project');
const User = require('../models/user');

exports.getAll = (req , res) => {
    
    // const user = res.locals.user ;
    // console.log(user) ;
    Project.find({} , (err , foundProjects) => {
        if(err){
            return res.json({"error" : "finding all projects"});
        }

        return res.json(foundProjects);
    }).sort({createdAt : -1});
};


exports.getBySlug =  (req , res) => {
   const slug = req.params.slug;
   // console.log(req.headers.url);
  
    Project.find({folder:slug} , (err , foundProject) => {
       if(err){
           return res.json({"error" : "in find by slug"});
       }
       console.log(foundProject);
       return res.json(foundProject);
   })
};

exports.getData =  (req , res) => {
   // const slug = req.params.slug;
   const link = req.headers.url;
  
    Project.find({title:link} , (err , foundProject) => {
       if(err){
           return res.json({"error" : "in find by slug"});
       }
       
       return res.json(foundProject);
   })
};

exports.createProject = async (req , res) => {
    const projectData = req.body ;
    // const user = res.locals.user ;
    const newProject = new Project({...projectData}) ;

    await Project.init();
    await Project.create(newProject , (err , createdProject) => {
          if(err){
              return res.json(err);
          }

          return res.json(createdProject);
    })
};


exports.deleteById =  (req , res) => {
    const projectId = req.params.id ;

    Project.findById(projectId , (err , foundProject ) => {
        if(err){
            return res.json({"error" : "in finding/delete Project"});
        }

        foundProject.remove((err) => {
           if(err){
            return res.json({"error" : "in deleting Project"});
           }
        })

        return res.json({"delete" : "success"});
    })

};
