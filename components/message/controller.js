const store = require("./store");
const socket = require("../../socket").socket;
const config = require("../../config");

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[message controller] No hay user o mensaje");
      return reject("Datos incorrectos");
    }

    let fileUrl = "";
    if (file) {
      fileUrl = config.host + ":" + config.port + config.publicRoute + "/" + config.filesRoute+ "/" + file.filename;
    }
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
    };
    store.add(fullMessage);

    socket.io.emit("message", fullMessage);

    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("ID invalido");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
