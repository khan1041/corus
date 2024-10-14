


const express=require('express')

const router=express.Router()

const contect=require('../message/message')
const control=require('../constrolar/auth-controlar')
 router.route("/con").post(contect.Contect)

router.route("/reg").post(control.regestation)
router.route("/log").post(control.login)
router.route("/meas").post(control.Meassage)

module.exports=router



