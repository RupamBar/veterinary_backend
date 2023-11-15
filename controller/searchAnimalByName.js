const supabase = require("../supabase/supabaseConfig.js");

const searchAnimalByName = async (req, res) => {
  try {
    const type = req.params.type;
    const name = req.params.name;
    const userData = req.body;

    let { data, error } = await supabase
      .from("animals")
      .select("*")

      // Filters
      .eq("animalType", type)
      .ilike('name', `%${name}%`)

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = searchAnimalByName;
