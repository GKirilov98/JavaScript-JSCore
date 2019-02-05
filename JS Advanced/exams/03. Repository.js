class Repository {
    get count() {
        return this._count = this.data.size;
    }
  constructor(props){
      this.props = props;
      this.data = new Map();
      this.key = -1;
      this._count = 0;
  }

    add(entity) {
        let props = Object.keys(this.props);
        let entityLength = Object.keys(entity).length;
        if (props.length === entityLength) {
            props.map((x) => {
                if (entity[x] === undefined) {
                    throw new Error(`Property ${x} is missing from the entity!`)
                } else if (typeof entity[x] !== this.props[x]) {
                    throw new TypeError(`Property ${x} is of incorrect type!`)
                }
            });
            this.key++;
            this.data.set(this.key, entity);
            return this.key;
        }
    }
    get(id){
        return this.data.get(id);
    }
    update(id, entity){
      if (this.data.has(id)){
          let props = Object.keys(this.props);
          let newEntityLenght = Object.keys(entity).length;
          if (props.length === newEntityLenght) {
              props.map((x) => {
                  if (entity[x] === undefined) {
                      throw new Error(`Property ${x} is missing from the entity!`)
                  } else if (typeof entity[x] !== this.props[x]) {
                      throw new TypeError(`Property ${x} is of incorrect type!`)
                  }
              });
              this.data.set(id, entity);
          }
      } else {
          throw new Error(`Entity with id: ${id} does not exist!`)
      }
    }

    del(id){
      if (this.data.has(id)){
        this.data.delete(id);
      } else {
          throw new Error(`Entity with id: ${id} does not exist!`)
      }
    }

}

// let properties = {
//     name: "string",
//     age: "number",
//     birthday: "object"
// };
// //Initialize the repository
// let repository = new Repository(properties);
// let entity = {
//     name: "Kiril",
//     age: 19,
//     birthday: new Date(1998, 0, 7)
// };
// repository.add(entity);
// repository.add(entity);// Retur// ns 1
// repository.del(32);
