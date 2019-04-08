
var Customer = require('../models/customer')
var bcrypt = require('bcrypt')



exports.getCustomers = (req, res) => {
    // async function retrieveCustomers() {
    //     var customerCollection = await Customer.find()
    //     res.status(200).json(customerCollection)
    // }
    // retrieveCustomers()
    Customer.find().then(docs => {
        res.status(200).json(docs)
    })

}

exports.postCustomers = (req, res) => {

    var BCRYPT_SALT_ROUNDS = 12

    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then((hashedPassword) => {
            var customer = new Customer({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                image: req.body.image,
                phone: req.body.phone,
            })
            customer.save((err) => {
                if (err) {
                    return res.status(409).json({register: "fail"})
                }
                else{
                    return res.status(201).json({register: "succeed"})
                }
            })
        })
        .catch((err) => {
            res.send("Error to save customer to Database.")
            console.log(err)
        })

}

exports.postLogin = (req, res) => {

    Customer.findOne({username: req.body.username})
        .then((customer) => {
            return bcrypt.compare(req.body.password, customer.password)
        })
        .then((samePassword) => {
            if (samePassword) {
                return res.status(200).json({samePassword: samePassword})
            }
            else{
                return res.status(403).json({samePassword: samePassword})
            }
        })
        .catch((err) => {
            res.status(400).send("Invalid Username OR Password.")
        })

}