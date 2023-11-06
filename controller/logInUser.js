const supabase = require("../supabase/supabaseConfig.js");

const logInUser = async (req, res) => {
  try {
    const userData = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: "user logged in successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = logInUser;
