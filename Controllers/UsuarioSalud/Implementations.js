const users = [];

const getUsers = (ctx) => {
    ctx.response.body = users;
};

const saveUser = (ctx) => {
    const user = ctx.request.body;
    users.push(user);
    ctx.response.body = user;
};

module.exports = {
      getUsers,
      saveUser,
};