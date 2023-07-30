// eslint-disable-next-line no-unused-vars
import express from "express"
import randomstring from "randomstring"
import View from "./../models/Authmodel.js"//POST

class authController {
    
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     */
  static async addAuth(req,res,next){
    console.log(req.body);
    try {
      const searchUser = await View.find({ password: req.body.adminPassword, userEmail: req.body.adminEmail });
      console.log(searchUser);
      let Authresponse = {
          'username': searchUser[0].userName,
          'authToken': randomstring.generate()
      }
      console.log(Authresponse);
      res.json(Authresponse)
    } catch (err) {
      res.status(404).json({ message: err });
    }
    }
}


export default authController
