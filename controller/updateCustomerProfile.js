const supabase = require("../supabase/supabaseConfig.js");

const updateCustomerProfile = async (req, res) => {
  try {
    const table = req.params.table;
    const userData = req.body;

    const { data, error } = await supabase
      .from(table)
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

module.exports = updateCustomerProfile;
