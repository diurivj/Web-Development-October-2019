const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signupView = (req, res) => {
  res.render("auth/signup");
};

exports.signupProcess = (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Correo y contraseña requeridos"
    });
  }

  User.findOne({ email })
    .then(user => {
      if (!user) {
        //TODO registrar
        // 1. configurar el salt
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        User.create({
          email,
          password: hashPassword
        })
          .then(() => {
            res.redirect("/");
          })
          .catch(err => console.error(err));
      } else {
        //notificar que el email está en uso
        res.render("auth/signup", { errorMessage: "Email en uso" });
      }
    })
    .catch(err => {
      console.error(err);
    });
};

/* login */

exports.loginView = (req, res) => {
  res.render("auth/login");
};

exports.loginProcess = async (req, res) => {
  // TODO ...
  // 1. extraemos la información de req.body
  const { email, password } = req.body;
  // 2. verificamos que no nos envien campos vacios
  if (email === "" || password === "") {
    res.render("auth/login", { errorMessage: "Error: Missing fields" });
  }
  // 3. Verificar si el correo está registrado, si lo está intentamos logear: verificamos si las contraseñas coinciden
  const user = await User.findOne({ email });
  if (!user) {
    res.render("auth/login", { errorMessage: "Error: Email doesn't exists" });
  }

  // 4. verificar si la contraseña es correcta
  if (
    bcrypt.compareSync(
      password,
      /* contraseña desde el formulario */ user.password
      /* contraseña hasheada almacenada en el registro del usuario */
    )
  ) {
    //Todo caso de éxito, inicio la sesión
    req.session.currentUser = user;
    res.redirect("/");
  } else {
    //todo error, contraseña incorrecta
    res.render("auth/login", { errorMessage: "Error: Incorrect Password" });
  }
};

exports.secretView = (req, res) => {
  res.render("secret");
};

exports.logout = async (req, res) => {
  await req.session.destroy();
  res.redirect("/");
};
