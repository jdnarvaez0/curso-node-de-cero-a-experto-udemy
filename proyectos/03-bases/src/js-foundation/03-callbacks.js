const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, null);
    }

    return callback(null, user);
}

module.exports = { getUserById };
