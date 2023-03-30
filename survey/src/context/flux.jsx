const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,

      username: null,

      credentials: '',

    },
    actions: {
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined)
          setStore({ token: token });
      },

      postSurvey: async (survey) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(survey),
        };
        try {
          const resp = await fetch(
            "http://127.0.0.1:5000/api/survey",
            opts
          );
          if (resp.status !== 200) {
            alert("Data not posted...");
            return false;
          }
          const data = await resp.json();
          if (data) console.log("Data posted!");
          return true;
        } catch (error) {
          console.error("There was an error in your request");
        }
      },


      login: async (username) => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            username: username,
          }),
        };
        try {
          const resp = await fetch(
            "http://127.0.0.1:5000/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Incorrect username");
            return false;
          }

          const data = await resp.json();
          sessionStorage.setItem("token", data.token);
          setStore({ token: data.token, username: data.username });
          return true;
        } catch (error) {
          console.error("There was an error in your request");
        }
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("logged out!");
        setStore({ token: null });
      },

      getCredentials: async () => {
        const store = getStore();
        console.log(store.token);
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        fetch(
          "http://127.0.0.1:5000/api/user",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ credentials: data.user }))

          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
        console.log(store.credentials);
      },
    },
  };
};

export default getState;
