const supabase = require("../supabase/supabaseConfig.js");

const getAssetsByIds = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = req.body;

    let { data, error } = await supabase
      .from("assets")
      .select("*")

      // Filters
      .in('id', [...userData])

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAssetsByIds;
