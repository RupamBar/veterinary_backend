const supabase = require("../supabase/supabaseConfig.js");

const getLoggedInUser = async (req, res) => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data : data?.user });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getLoggedInUser;
