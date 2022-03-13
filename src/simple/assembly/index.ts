import { storage, Context, PersistentMap, PersistentVector, PersistentUnorderedMap } from "near-sdk-as";

let map = new PersistentUnorderedMap<number, number>("items");
map.set(0, 10);
map.set(1, 12);

let items = new PersistentVector<string>("i");
items.push("apples");
items.push("eggs");

const TOTAL_ALLOWED = 20;

export class Refrigerator {}

// A function to check if there are enough items in the refrigerator; if not return the number of items that are missing
export function checkRefrigeratorForItem(item: number): bool {
  if (map.getSome(item) < TOTAL_ALLOWED / 2) {
    return true;
  } else {
    return false;
  }
}

export function getItem(index: i32): string {
  return items[index];
}


export function getAmountOfItems(): string {
  for (let i = 0; i < items.length; i++) {
    return `${items[i]} has ${map.getSome(i)}`;
  }
  return ``;
}

// A function to add items to the refrigerator
function addItems(itemToAdd: number, amountToAdd: number): string {
  let totalAmountAfterAdding = map.getSome(itemToAdd) + amountToAdd;
  map.set(itemToAdd, totalAmountAfterAdding);
  return `✅ Items added to refrigerator.`;
}

// A function to remove items from the refrigerator
function removeItems(itemToRemove: number, amountToRemove: number): string {
  let totalAmountAfterSubtracting = map.getSome(itemToRemove) - amountToRemove;
  map.set(itemToRemove, totalAmountAfterSubtracting);
  for (let i = 0; i < items.length; i++) {
    assert(checkRefrigeratorForItem(i)) 
      let amountToBuy = TOTAL_ALLOWED - map.getSome(i);
      placeOrder(i, amountToBuy);
  }
  return `✅ Items removed from refrigerator.`;
}

// A function to place an order for groceries
export function placeOrder(itemToBuy: number, amountToBuy: number): string {
  let itemsBought = new PersistentVector<string>("itemsBought");
  addItems(itemToBuy, amountToBuy);
  itemsBought.push(getItem(itemToBuy));
  return `✅ Order placed.`;
}

// write the given value at the given key to account (contract) storage
export function SetTotalNumberOfGroceryItemPresent(
  ItemName: string,
  ItemValueOfItemsPresent: number
): string {
  storage.set(ItemName, ItemValueOfItemsPresent);
  return `✅ Data saved. ( ${storageReport()} )`;
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`;
}
