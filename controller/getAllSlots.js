const supabase = require("../supabase/supabaseConfig.js");

const getAllSlots = async (req, res) => {
  try {
    const userData = req.body;

    let { data, error } = await supabase
      .from("slots")
      .select('*, customers(*), pets(*, animals(*)), doctors(*), employees(*)')
      ;

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllSlots;
