const { error } = require("console");
const fs = require("fs").promises;
const path = require("path");
const userFilePath = path.resolve(__dirname, "../../data/users.json");

const usersController = {};

usersController.getAllData = (req, res) => {
    try {
        const data = await fs.read
    }
}




module.exports = usersController;
