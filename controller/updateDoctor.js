const supabase = require("../supabase/supabaseConfig.js");

const updateDoctor = async (req, res) => {
  try {
    const userData = req.body;

    const { data, error } = await supabase
      .from("doctors")
      .update(userData)
      .eq("id", userData.id)
      .select();

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = updateDoctor;