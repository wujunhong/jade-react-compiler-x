module.exports = function() {
  var id = 42;
  return id = 42, null, React.DOM.div(null, "some\n#{text}\nhere\nMy ID ", "is {" + id + "}");
};