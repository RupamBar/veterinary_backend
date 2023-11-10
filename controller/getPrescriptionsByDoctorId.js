const supabase = require("../supabase/supabaseConfig.js");

const getPrescriptionsByDoctorId = async (req, res) => {
  try {
    const id = req.params.id
    const userData = req.body;

    let { data, error } = await supabase
      .from("prescriptions")
      .select('*, customers(*), pets(*, animals(*)), doctors(*), slots(*)')
      .eq('doctorId', id)
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

module.exports = getPrescriptionsByDoctorId;
