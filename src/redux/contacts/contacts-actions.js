import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

uuidv4();

const addContact = createAction("contacts/add", ({ name, phone }) => ({
  payload: {
    id: uuidv4(),
    name,
    phone,
  },
}));

const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default contactsActions;
