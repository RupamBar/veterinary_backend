const supabase = require("../supabase/supabaseConfig.js");

const getAnimalByN_A_S = async (req, res) => {
  try {
    // const id = req.params.id;
    const userData = req.body;

    let { data, error } = await supabase
      .from("animals")
      .select("*")

      // Filters
      .eq("name", userData.name)
      .eq("sex", userData.sex)
      .eq("age", userData.age)

    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAnimalByN_A_S;
