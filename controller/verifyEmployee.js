const supabase = require("../supabase/supabaseConfig.js");

const verifyEmployee = async (req, res) => {
  try {
    const userData = req.body;

    let { data, error } = await supabase
      .from("employees")
      .select("*")

      // Filters
      .eq("empCode", userData.empCode)

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      // console.log(data, "data>>>>>>>");
      if(data[0].id.slice(0, 4) === userData.fourChars)
      {
        res.status(200).json({ message: "Verified" });
      }
      else
      {
        res.status(200).json({ message: "Unverified" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = verifyEmployee;
