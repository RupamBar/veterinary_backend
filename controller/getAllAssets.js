const supabase = require("../supabase/supabaseConfig.js");

const getAllAssets = async (req, res) => {
  try {
    const userData = req.body;

    let { data, error } = await supabase
      .from("assets")
      .select("*");

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllAssets;
