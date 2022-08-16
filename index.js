const eventHandler = cb => {
  let event = 1;
  setInterval(() => {
    cb(event++);
  }, 3000);
};

eventHandler(event => {
  console.log('event => ', event);
})


