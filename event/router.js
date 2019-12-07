const { Router } = require("express");
const Event = require("./model");
const router = new Router();

router.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(error => next(error));
});
// router.get("/event", (req, res, next) => {
//   Event.findAll()
//     .then(events => res.send(events))
//     .catch(error => next(error));
// });

//pagination
router.get("/event", (req, res, next) => {
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;

  Event.findAndCountAll({ limit, offset })
    .then(result => res.send({ events: result.rows, total: result.count }))
    .catch(error => next(error));
});

router.get("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => res.send(event))
    .catch(error => next(error));
});
router.patch("/event/:id", (req, res, next) => {
  //it was put
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(updEvent => res.send(updEvent))
    .catch(error => next(error)); // is it correct?
});
router.delete("/event/:id", (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number })) //why do we put number in {}? What number it is? It seems that it is a quantity of deleted rows but not the row id
    .catch(next);
});

module.exports = router;
