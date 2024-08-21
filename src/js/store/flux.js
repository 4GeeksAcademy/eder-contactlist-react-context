const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      sendSomeData: (obj) => {
        fetch("https://playground.4geeks.com/contact/agendas/emfs/contacts", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        });
      },

      loadSomeData: () => {
        fetch("https://playground.4geeks.com/contact/agendas/emfs", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => setStore({ contacts: data.contacts }));
      },
      updateSomeData: (id, obj) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/emfs/contacts/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      },
      deleteSomeData: (id) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/emfs/contacts/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
