/*const firm = {
  teams: [
    {
      leader: 'John Doe',
      workers: ['Jane Smith', 'Bob Johnson', 'Alice Williams']
    },
    {
      leader: 'Mark Brown',
      workers: ['Charlie Davis', 'David Miller', 'Eve Johnson']
    }
  ],
  orders: [
    {
      location: '123 Main St',
      work: 'Painting',
      price: 2000,
      team: 0 // Index of the team that completed the order
    },
    {
      location: '456 Elm St',
      work: 'Roofing',
      price: 3000,
      team: 1 // Index of the team that completed the order
    }
  ]
};

// Adding a team
function addTeam(leader, ...workers) {
  firm.teams.push({leader, workers});
  console.log(`Added team with leader ${leader} and workers ${workers}`);
}

// Removing a team
function removeTeam(teamIndex) {
  let removedTeam = firm.teams.splice(teamIndex, 1);
  console.log(`Removed team with leader ${removedTeam[0].leader} and workers ${removedTeam[0].workers}`);
}

// Modifying a team
function modifyTeam(teamIndex, newLeader = null,...newWorkers) {
  firm.teams[teamIndex].leader = newLeader;
  firm.teams[teamIndex].workers = newWorkers;
  console.log(`Modified team with index ${teamIndex} to have leader ${newLeader} and workers ${newWorkers}`);
}

// Modifying an order
function modifyOrder(orderIndex, newLocation, newWork, newPrice, newTeamIndex) {
  firm.orders[orderIndex].location = newLocation;
  firm.orders[orderIndex].work = newWork;
  firm.orders[orderIndex].price = newPrice;
  firm.orders[orderIndex].team = newTeamIndex;
  console.log(`Modified order at index ${orderIndex} to have location ${newLocation}, work ${newWork}, price ${newPrice}, and team index ${newTeamIndex}`);
}

// Adding an order
function addOrder(location, work, price, teamIndex) {
  firm.orders.push({location, work, price, team: teamIndex});
  console.log(`Added order at location ${location} with work ${work}, price ${price}, and team index ${teamIndex}`);
}

// Removing an order
function removeOrder(orderIndex) {
  let removedOrder = firm.orders.splice(orderIndex, 1);
  console.log(`Removed order at location ${removedOrder[0].location} with work ${removedOrder[0].work}, price ${removedOrder[0].price}, and team index ${removedOrder[0].team}`);
}



// Getting order information by ID
function getOrderInfoById(orderId) {
  let order = firm.orders[orderId];
  console.log(`Order at index ${orderId} has location ${order.location}, work ${order.work}, and price ${order.price}`);
}

addTeam('lsevlvsp;vld', 'Jane Smith', 'Saul Goodman', 'Alice Williams');
removeTeam(0);
modifyTeam(0, 'Lalo', ['New Worker 1', 'New Worker 2']);
addOrder('123 Main St', 'Painting', 2000, 0);
removeOrder(0);
modifyOrder(0, 'New Location', 'New Work', 3000, 1);
getOrderInfoById(0);
 */

const firm = {
  teams: [
    {
      leader: 'John Doe',
      workers: ['Jane Smith', 'Bob Johnson', 'Alice Williams']
    },
    {
      leader: 'Mark Brown',
      workers: ['Charlie Davis', 'David Miller', 'Eve Johnson']
    }
  ],
  orders: [
    {
      location: '123 Main St',
      work: 'Painting',
      price: 2000,
      team: 0 // Index of the team that completed the order
    },
    {
      location: '456 Elm St',
      work: 'Roofing',
      price: 3000,
      team: 1 // Index of the team that completed the order
    }
  ]
};

// Adding a team
function addTeam(leader, ...workers) {
  firm.teams.push({leader, workers});
  console.log(`Added team with leader ${leader} and workers ${workers}`);
}

// Removing a team
function removeTeam(teamIndex) {
  let removedTeam = firm.teams.splice(teamIndex, 1);
  console.log(`Removed team with leader ${removedTeam[0].leader} and workers ${removedTeam[0].workers}`);
}

// Modifying a team
function modifyTeam(teamIndex, newLeader = null,...newWorkers) {
  if(newLeader !== null){
  firm.teams[teamIndex].leader = newLeader;
  }
  if (newWorkers.length > 0){
  firm.teams[teamIndex].workers.push(newWorkers);
  }
  console.log(`Modified team with index ${teamIndex} to have leader ${newLeader} and workers ${newWorkers}`);
}

// Modifying an order
const modifyOrder = (orderIndex, newLocation = null, newWork = null, newPrice = null, newTeamIndex= null) => {
  if (newLocation!== null) {
    firm.orders[orderIndex].location = newLocation;
  }
  if (newWork!== null) {
    firm.orders[orderIndex].work.push(newWorkers);
  }
  if (newPrice!== null) {   
    firm.orders(orderIndex) = newPrice;
  }
  if (newTeamIndex!== null) {
    firm.orders(orderIndex) = newTeamIndex;
  }
  console.log(`Modified order at index ${orderIndex} to have location ${newLocation}, work ${newWork}, price ${newPrice}, and team index ${newTeamIndex}`);
}

// Adding an order
function addOrder(location, work, price, teamIndex) {
  firm.orders.push({location, work, price, team: teamIndex});
  console.log(`Added order at location ${location} with work ${work}, price ${price}, and team index ${teamIndex}`);
}

// Removing an order
function removeOrder(orderIndex) {
  let removedOrder = firm.orders.splice(orderIndex, 1);
  console.log(`Removed order at location ${removedOrder[0].location} with work ${removedOrder[0].work}, price ${removedOrder[0].price}, and team index ${removedOrder[0].team}`);
}



// Getting order information by ID
function getOrderInfoById(orderId) {
  let order = firm.orders[orderId];
  console.log(`Order at index ${orderId} has location ${order.location}, work ${order.work}, and price ${order.price}`);
}

addTeam('lsevlvsp;vld', 'Jane Smith', 'Saul Goodman', 'Alice Williams');
removeTeam(0);
modifyTeam(0, '', ['New Worker 1', 'New Worker 2']);
addOrder('123 Main St', 'Painting', 2000, 0);
removeOrder(0);
modifyOrder(0, 'New Location', 'New Work', 3000, 1);
getOrderInfoById(0);




