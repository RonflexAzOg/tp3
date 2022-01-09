const express = require('express');
const usersController = require('./usersController');

const router = express.Router();

router.route('/users')
      //Reads all data users
      .get([
            usersController.readsUsersData
      ])
      //Add new user
      .post(
            function(req, res) {
                  usersController.addNewUser(req, res)
            }
      )
      //Edit user with id
      .put(
            function(req, res) {
                  usersController.editUserPerId(req, res)
            }
      )

router.route('/users/:id')
      //Read data user per id
      .get([
            usersController.readsUsersPerId
      ])
      // Delete user with id
      .delete(
            function(req, res) {
                  usersController.deleteUserPerId(req, res)
            }
      )

module.exports = router;