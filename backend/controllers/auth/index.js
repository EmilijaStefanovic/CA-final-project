import User from '../../db/UserModel.js';

export async function signUp(req, res) {
  try {
    const { email, password, firstName, lastName } = req.body;
    console.log(email, password, firstName, lastName, 'hello');
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    const resp = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    res.json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(
      { email: email, password: password },
      { id: true }
    );
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
