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
  const userInfo = req.body;
  fs.readFile(usersFile, (error, data) => {
    if (error) {
      console.error("Error reading user file:", error);
      return res.status(500).json({ error: "Error reading user file" });
    }

    if (!id || !userInfo) {
      return res.status(400).json({ error: "Bad Request: No ID or INFO" });
    }

    let jsonUsers;
    try {
      jsonUsers = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing user data:", parseError);
      return res.status(500).json({ error: "Error parsing user data" });
    }

    const userToEditIndex = jsonUsers.findIndex(user => user.userId === id);
    if (userToEditIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verificar si el correo electrónico ya está registrado
    const emailExists = jsonUsers.some(
      user => user.email === userInfo.email && user.userId !== id
    );
    if (emailExists) {
      return res.status(409).json({ error: "Este correo ya está registrado" });
    }

    jsonUsers[userToEditIndex] = { ...jsonUsers[userToEditIndex], ...userInfo };

    // Guardar los cambios en el archivo
    fs.writeFile(usersFile, JSON.stringify(jsonUsers, null, 2), writeError => {
      if (writeError) {
        console.error("Error writing user file:", writeError);
        return res.status(500).json({ error: "Error writing user file" });
      }

      return res.status(200).json(jsonUsers[userToEditIndex]);
    });
  });
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
