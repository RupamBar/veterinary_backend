
const supabase = require("../supabase/supabaseConfig.js");

const addSoldAssets = async (req, res) => {
  try {
    const userData = req.body;

    const { data, error } = await supabase
      .from("sold_assets")
      .insert(userData)
      .select();

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data : data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = addSoldAssets;
