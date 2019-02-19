/*
    Testcafe doesn't have the notion of a beforeAll (for whatever reason) and suggests
    this hacky solution...
 */
module.exports = (fn) => {
    return () => {
        if (!fn.hasExecuted) {
           fn.hasExecuted = true;
           return fn.apply(this, arguments);
        }
    };
}