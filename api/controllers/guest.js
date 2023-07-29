import express from "express"
import Guest from "./../models/Guestmodel.js"//POST

class GuestController {
  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
    static async getAll(req,res,next){
      try {
        const guestList = await Guest.find();
        res.json(guestList);
      } catch (err) {
        res.json({ message: err });
      }
    }
  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
    static async addGuest(req,res,next){
      console.log(req.body);
      const guest = new Guest({
        adminEmail: req.body.adminEmail,
        adminPassword: req.body.adminPassword,
      });
      try {
        const savedGuest = await guest.save();
        res.json(savedGuest);
      } catch (err) {
        res.json({ message: err });
      }
    }
  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
    static async searchGuest(req,res,next){
      console.log(req.body);
  try {
    const searchGuest = await Guest.find({ email: req.body.email });
    res.json(searchGuest);
  } catch (err) {
    res.json({ message: err });
  }
    }
  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
    static async deleteGuest(req,res,next){
      console.log(req.body);
  try {
    const deleteGuest = await Guest.deleteOne({
      adminEmail: req.body.adminEmail,
    });
    res.json(deleteGuest);
    console.log(searchGuest);
  } catch (err) {
    res.json({ message: err });
  }
    }
  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
    static async updateGuest(req,res,next){
      console.log(req.body);
      try {
        const updateGuest = await Guest.updateOne(
          { email: req.body.email },
          {
            $set: {
              adminEmail: req.body.adminEmail,
              adminPassword: req.body.adminPassword,
            },
          }
        );
        res.json(updateGuest);
      } catch (err) {
        res.json({ message: err });
      }
    }
}


// router.get("/", async (req, res) => {
  
// });

// router.post("/", async (req, res) => {
  // console.log(req.body);
  // const guest = new Guest({
  //   adminEmail: req.body.adminEmail,
  //   adminPassword: req.body.adminPassword,
  // });
  // try {
  //   const savedGuest = await guest.save();
  //   res.json(savedGuest);
  // } catch (err) {
  //   res.json({ message: err });
  // }
// });

// router.post("/search", async (req, res) => {
//   console.log(req.body);
//   try {
//     const searchGuest = await Guest.find({ email: req.body.email });
//     res.json(searchGuest);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/delete", async (req, res) => {
//   console.log(req.body);
//   try {
//     const deleteGuest = await Guest.deleteOne({
//       adminEmail: req.body.adminEmail,
//     });
//     res.json(deleteGuest);
//     console.log(searchGuest);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/update", async (req, res) => {
//   console.log(req.body);
//   try {
//     const updateGuest = await Guest.updateOne(
//       { email: req.body.email },
//       {
//         $set: {
//           adminEmail: req.body.adminEmail,
//           adminPassword: req.body.adminPassword,
//         },
//       }
//     );
//     res.json(updateGuest);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

export default GuestController;
