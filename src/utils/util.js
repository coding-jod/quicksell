export const groupTicketsByStatus = (tickets) => {
  const groups = tickets.reduce(
    (result, ticket) => {
      if (!result[ticket.status]) {
        result[ticket.status] = [];
      }
      result[ticket.status].push(ticket);
      return result;
    },
    { Backlog: [], Todo: [], "In progress": [], Done: [], Cancelled: [] }
  );

  return groups;
};

export const groupTicketsByPriority = (tickets) => {
  const groups = tickets.reduce(
    (result, ticket) => {
      const priority = getPriotityLabel(ticket.priority);
      if (!result[priority]) {
        result[priority] = [];
      }
      result[priority].push(ticket);
      return result;
    },
    { "No priority": [], Low: [], Medium: [], High: [], Urgent: [] }
  );

  return groups;
};

export const groupTicketsByUserId = (tickets) => {
  const groups = tickets.reduce((result, ticket) => {
    if (!result[ticket.userId]) {
      result[ticket.userId] = [];
    }
    result[ticket.userId].push(ticket);
    return result;
  }, {});

  // Sort the keys (userIds) in alphabetical order and return the sorted object
  const sortedGroups = Object.keys(groups)
    .sort()  // Sort the user IDs alphabetically
    .reduce((sortedResult, userId) => {
      sortedResult[userId] = groups[userId];
      return sortedResult;
    }, {});

  return sortedGroups;
};


export const mapUsersByUserId = (users) => {
  let group = users.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
  }, {});

  return group;
};

const getPriotityLabel = (priority) => {
  switch (priority) {
    case 0:
      return "No priority";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    case 4:
      return "Urgent";
    default:
      return "NA";
  }
};

const orderByPriority = (tickets) =>
  tickets.sort((a, b) => (a.priority > b.priority ? -1 : 1));
const orderByTitle = (tickets) =>
  tickets.sort((a, b) => (a.title < b.title ? -1 : 1));

export const loadGrid = (tickets, grouping, ordering) => {
  let orderedTickets;
  if (ordering === "priority") orderedTickets = orderByPriority(tickets);
  else orderedTickets = orderByTitle(tickets);

  switch (grouping) {
    case "status":
      return groupTicketsByStatus(orderedTickets);
    case "priority":
      return groupTicketsByPriority(orderedTickets);
    case "user":
      return groupTicketsByUserId(orderedTickets);
    default:
      return groupTicketsByUserId(orderedTickets);
  }
};
