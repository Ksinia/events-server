const { Router } = require("express");
const Event = require("./model");
const router = new Router();

router.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(error => next(error));
});
router.get("/event", (req, res, next) => {
  Event.findAll()
    .then(events => res.send(events))
    .catch(error => next(error));
});
router.get("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => res.send(event))
    .catch(error => next(error));
});
router.put("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(updEvent => res.send(updEvent))
    .catch(error => next(error)); // is it correct?
});
router.delete("/event/:id", (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number })) //why do we put number in {}?
    .catch(next);
});

module.exports = router;
