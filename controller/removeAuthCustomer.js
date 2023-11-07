const supabase = require("../supabase/supabaseConfig.js");

const removeAuthCustomer = async (req, res) => {
  try {
    const authId = req.params.authId;
    const userData = req.body;

    const { error } = await supabase.auth.admin.deleteUser(authId);

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: "Customer's authentication removed successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = removeAuthCustomer;
