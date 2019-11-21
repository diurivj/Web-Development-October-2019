const express = require("express");
const router = express.Router();
const { sendEmailView, sendEmail } = require("../controllers/email");
const { homeView } = require("../controllers/home.js");
const catchErrors = require("../middlewares/catchErrors");

/* GET home page */
router.get("/", catchErrors(homeView));

router.get("/send-email", sendEmailView);

router.post("/send-email", catchErrors(sendEmail));
module.exports = router;
