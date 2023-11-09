const supabase = require("../supabase/supabaseConfig.js");

const signUpDoctor = async (req, res) => {
  try {
    const userData = req.body;
    // console.log(userData, "userData");

    const { response, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          name: userData.name,
          userType: 'doctor'
        },
      },
    });

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
        res.status(200).json({ message: "Doctor registerd successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = signUpDoctor;
