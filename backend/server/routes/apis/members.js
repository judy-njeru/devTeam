const express =  require('express');
const mongodb = require('mongodb')

const router = express.Router()

//Get Members
router.get('/', async(req, res)=>{
    const members = await loadMembersCollection();
    res.send(await members.find({}).toArray())
})

async function loadMembersCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc123:smari123@cluster0-xkucs.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })

    return client.db('vue-express-app').collection('members')
}

//Add Members
router.post('/', async (req, res) =>{
    const members = await loadMembersCollection();
    await members.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
})


//Delete Members
router.delete('/:id', async (req,res) =>{
    const members = await loadMembersCollection();
    await members.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

module.exports = router;