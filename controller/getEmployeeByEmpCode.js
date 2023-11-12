const supabase = require("../supabase/supabaseConfig.js");

const getEmployeeByEmpCode = async (req, res) => {
  try {
    const empCode = req.params.empCode;
    const userData = req.body;

    let { data, error } = await supabase
      .from("employees")
      .select("*")

      // Filters
      .eq("empCode", empCode)

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getEmployeeByEmpCode;
