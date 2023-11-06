const supabase = require("../supabase/supabaseConfig.js");

const signOutUser = async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signOut();

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({message : "user logged out successfully"});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = signOutUser;
