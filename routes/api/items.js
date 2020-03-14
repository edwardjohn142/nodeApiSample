const router = require('express').Router();


const Item = require('../../models/Items')


// @rout Get  api/items
// @desc Get All Items
// @access public

router.route('/').get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json('Error: ' + err));
});


  
// @rout POST  api/items
// @desc Post create item
// @access public

router.route('/').post((req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @rout Delete  api/items:id
// @desc Delete a item
// @access public

router.delete('/:id',(req,res) =>{
            
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}));
});








module.exports = router;