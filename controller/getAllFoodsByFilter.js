const supabase = require("../supabase/supabaseConfig.js");

const getAllFoodsByFilter = async (req, res) => {
  try {
    const filter = req.params.filter;
    const userData = req.body;

    let { data, error } = await supabase
      .from("foods")
      .select("*")
      .order('price', { ascending: filter === 'asc' });

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllFoodsByFilter;
