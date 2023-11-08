const supabase = require("../supabase/supabaseConfig.js");

const deleteAnimal = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = req.body;

    const { error } = await supabase
      .from("animals")
      .delete()
      .eq("id", id);

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: 'Customer deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = deleteAnimal;
