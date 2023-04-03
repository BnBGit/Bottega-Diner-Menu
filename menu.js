const menu = {
    breakfast: {
      items: {
        "Pancakes": 5.99,
        "Waffles": 6.99,
        "Eggs and Bacon": 4.99,
        "Bagel and Cream Cheese": 3.99
      },
      comment: "Good morning! Here's our breakfast menu.",
      costMessage: "Your total for breakfast is: $"
    },
    lunch: {
      items: {
        "Burger": 8.99,
        "Sandwich": 6.99,
        "Soup": 5.99,
        "Salad": 4.99
      },
      comment: "Welcome! Here's our lunch menu.",
      costMessage: "Your total for lunch is: $"
    },
    dinner: {
      items: {
        "Steak": 14.99,
        "Chicken Alfredo": 12.99,
        "Fish and Chips": 10.99,
        "Veggie Burger": 9.99
      },
      comment: "Good evening! Here's our dinner menu.",
      costMessage: "Your total for dinner is: $"
    },
    sides: {
      items: {
        "Fries": 1.99,
        "Onion Rings": 2.99,
        "Side Salad": 1.49,
        "Mashed Potatoes": 2.49
      },
      comment: "Would you like a side with that?",
      costMessage: "Your total for sides is: $"
    }
  };
  
  function displayMenu() {
    for (let meal in menu) {
      let items = menu[meal].items;
      let itemString = "";
      for (let item in items) {
        itemString += `${item}: $${items[item]}\n`;
      }
      alert(menu[meal].comment + "\n" + itemString);
    }
  }
  
  function selectItem(itemType) {
    let items = menu[itemType].items;
    let itemString = "";
    for (let item in items) {
      itemString += `${item}\n`;
    }
    let choice = prompt(`Please select a ${itemType} item:\n${itemString}`);
    if (items.hasOwnProperty(choice)) {
      let commentArray = ["Great choice!", "Excellent taste!", "Can't go wrong with that!"];
      let comment = commentArray[Math.floor(Math.random() * commentArray.length)];
      alert(`${comment} ${menu[itemType].costMessage}${items[choice].toFixed(2)}`);
      return items[choice];
    } else {
      alert("Invalid choice!");
      return 0;
    }
  }
  
  function calculateTotal() {
    let entreeCost = selectItem("breakfast") + selectItem("lunch") + selectItem("dinner");
    let sidesCost = selectItem("sides") + selectItem("sides");
    let totalCost = entreeCost + sidesCost;
    alert(`Your total is: $${totalCost.toFixed(2)}`);
  }
  
  displayMenu();
  calculateTotal();