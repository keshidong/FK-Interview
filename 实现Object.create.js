function create(o, propsObject) {
    function F(propsObject) {
        Object.defineProperties(this, propsObject);
    }

    F.prototype = o;
    return new F(propsObject);
}

Person.prototype = Object.assign(Person.prototype, {
    
})
