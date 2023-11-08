const supabase = require("../supabase/supabaseConfig.js");

const getEmployeeByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const userData = req.body;

    let { data, error } = await supabase
      .from("employees")
      .select("*")

      // Filters
      .eq("email", email)

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getEmployeeByEmail;
