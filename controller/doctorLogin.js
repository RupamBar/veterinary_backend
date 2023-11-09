const supabase = require("../supabase/supabaseConfig.js");

const doctorLogin = async (req, res) => {
  try {
    const userData = req.body;
    // console.log(userData, "userData");

    let { data, error } = await supabase
      .from("doctors")
      .select("*")

      // Filters
      .eq("email", userData.email)
      .eq("password", userData.password)

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
        res.status(200).json({ data : data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = doctorLogin;
