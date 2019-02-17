const express =  require('express');
const mongodb = require('mongodb')

const router = express.Router()

//Get Members
router.get('/', async(req, res)=>{
    try{
        const members = await loadMembersCollection();
        res.send(await members.find({}).toArray())
    }catch(error) {
        console.log(error)
    }
    
})

async function loadMembersCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc123:smari123@jubimembers-xkucs.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })

    return client.db('vue-express-app').collection('members')
}

//Add Members
router.post('/', async (req, res) =>{
    try {
        const members = await loadMembersCollection();
        await members.insertOne({
            name: req.body.name,
            skills: req.body.skills,
            background: req.body.background,
            createdAt: new Date()
        });
        res.status(201).send();
    }catch(error) {
        console.log(error) 
    }   
})


//Delete Members
router.delete('/:id', async (req,res) =>{
    try {
        const members = await loadMembersCollection();
        await members.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    }catch(error){
        console.log(error)
    }
    
});

//View Member Info
router.get('/:memberID', async(req, res)=>{
    try{
        const members = await loadMembersCollection();
        res.send(await members.find({_id: new mongodb.ObjectID(req.params.memberID)}).toArray());
    }catch(error) {
        console.log(error)
    }
    
})



module.exports = router;