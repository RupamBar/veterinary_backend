const supabase = require("../supabase/supabaseConfig.js");

const signUp = async (req, res) => {
  try
  {
    const userData = req.body;

  const { response, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      data: {
        name: userData.name,
      },
    },
  });

  if(error)
  {
    res.status(500).json({message : error.message});
  }
  else
  {
    res.status(200).json({message:"user registerd successfully"});
  }
  }
  catch(err)
  {
    res.status(500).json({message : err.message});
  }
};

module.exports = signUp;
