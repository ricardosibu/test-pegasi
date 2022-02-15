const Person = require('../models/person');

const PersonController = {
    main: function(req, res) {
        return res.status(200).send({
            message: 'activo el controller'
        })
    },

    personSave: function(req, res) {
        const person = new Person();

        const params = req.body;
        person.name = params.name;
        person.surname = params.surname;
        person.age = params.age;
        person.sex = params.sex;
        person.pregnant = params.pregnant;
        person.phone = params.phone;

        person.save((err, personStored) => {
            if(err) return res.status(500).send({message: "error save new person"});
            if(!personStored) return res.status(404).send({message: "person don't exist"});

            return res.status(200).send({person: personStored});
        })
    },
    getAllPerson(req, res) {
        Person.find({}).exec((err, person) => {
            if(err) return res.status(500).send({message: "Error response"});
            if(!person) return res.status(404).send({message: "person don't exist"});

            return res.status(200).send({
                person
            });
        })
    },

    getPerson: function(req, res) {
        const personId = req.params.id;

        Person.findById(personId, (err, person) => {
            if(err) return res.status(500).send({message: "error in response"});
            if(!person) return res.status(404).send({message: "person don't exist"});

            return res.status(200).send({
                person
            });
        });
    },

    updatePerson: function(req, res) {
        var personId = req.params.id;
        var update = req.body;

        Person.findByIdAndUpdate(personId, update, (err, personUpdated) => {
            if(err) return res.status(500).send({message: "Error al devolver datos"});
            if(!personUpdated) return res.status(404).send({message: "person don't exis"});

            return res.status(200).send({
                person: personUpdated
            });
        });
    },

    deletePerson: function(req, res) {
        var personId = req.params.id;

        Person.findByIdAndRemove(personId, (err, personRemoved) => {
            if(err) return res.status(500).send({message: "No se ha podido borrar el proyecto"});
            if(!personRemoved) return res.status(404).send({message: "El paciente no existe"});

            return res.status(200).send({
                person: personRemoved
            });
        });
    }

}

module.exports = PersonController;