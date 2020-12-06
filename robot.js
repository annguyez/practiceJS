
const roads = [
    "Alice's House-Bob's House",  
     "Alice's House-Cabin",
    "Alice's House-Post Office",
       "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
     "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
     "Grete's House-Farm",
    "Grete's House-Shop",    
          "Marketplace-Farm",
    "Marketplace-Post Office",   
      "Marketplace-Shop",
    "Marketplace-Town Hall",    
       "Shop-Town Hall"
  ];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );
  let next = first.move("Alice's House");
  
  console.log(next.place);
  // → Alice's House
  console.log(next.parcels);
  // → []
  console.log(first.place);
  // → Post Office

let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);
// → 5

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }

  VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
  };

  runRobot(VillageState.random(), randomRobot);

  //runRobotAnimation(VillageState.random(), randomRobot);

  let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.events[2]);
  // → undefined
  let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  };
  let arr =["1","2","3"];
  console.log(arr.reverse());
  

// → ["C", "B", "A"];

class PGroup {
    constructor(ar) {
      this.ar = ar;
    }
  
    add(value) {
      return new PGroup(this.ar.concat([value]));
    }
  
    delete(value) {
      return new PGroup(this.ar.filter(m => m !== value));
    }
  
    has(value) {
      return this.ar.includes(value);
    }
}
  
//PGroup = new PGroup([]);
let s= new PGroup(['BE', 'EUU']);
//let a = PGroup.empty.add("a");
//let ab = a.add("b");
// let b = ab.delete("a");

// console.log(b.has("b"));
console.log(s.ar);
let t = s.add("test");
console.log(t);

let d = s.delete("BêE");
console.log(d);
console.log(s.has('BEfdg'));//false
console.log(s.has('BE'));//true


// → true
// console.log(a.has("b"));
// // → false
// console.log(b.has("a"));
// → false


