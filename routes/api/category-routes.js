const router = require('express').Router();
const { Category, Product } = require('../../models');

//---------------------8<-------------------------
// This is the endpoint that the front-end will use to get all categories

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  }
  );
});

//---------------------8<-------------------------
// This is the endpoint that the front-end will use to get a single category by id

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  }
  )
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  }
  );
});

//---------------------8<-------------------------
// This is the endpoint that the front-end will use to create a new category

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  }
  );
});

//---------------------8<-------------------------
// This is the endpoint that the front-end will use to update a category by id

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData[0]) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  }
  )
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  }
  );
});

//---------------------8<-------------------------
// This is the endpoint that the front-end will use to delete a category by id

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  }
  )
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  }
  );
});

module.exports = router;
