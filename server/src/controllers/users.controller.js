const { error } = require("console");
const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");
const userFilePath = path.resolve(__dirname, "../../data/users.json");

const usersController = {};

usersController.getAllData = async (req, res) => {
  try {
    const data = await fs.readFile(userFilePath);
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  } catch (error) {
    res.status(500).send("Error al leer el archivo");
  }
};

usersController.getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const userList = await fs.readFile(userFilePath);
    const data = JSON.parse(userList);

    const user = data.find(user => user.userId === id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al leer el archivo");
  }
};

usersController.updateDataById = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const userList = await fs.readFile(userFilePath);
    const data = JSON.parse(userList);

    const userExist = data.find(user => user.userId === id);
    if (!userExist) {
      return res.status(404).send("Usuario no encontrado");
    }

    const emailExists = data.some(user => user.email === req.body.email);
    if (emailExists) {
      return res.status(409).send("Este correo ya está registrado");
    }

    data[userExist] = {
      ...data[userExist],
      ...updatedFields,
    };

    await fs.writeFile(userFilePath, JSON.stringify(data));

    res.json(data[userExist]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el usuario");
  }
};

usersController.deleteDataById = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const userList = await fs.readFile(userFilePath);
    const data = JSON.parse(userList);

    const userExist = data.find(user => user.userId === id);
    if (!userExist) {
      return res.status(404).send("Usuario no encontrado");
    }

    const deleteUser = data.filter(user => user.userId !== id);
    await fs.writeFile(userFilePath, JSON.stringify(deleteUser));

    res.send("Usuario eliminado");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el usuario");
  }
};

module.exports = usersController;
