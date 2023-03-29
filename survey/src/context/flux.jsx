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
          if (token && token != "" && token != undefined)
            setStore({ token: token });
        },
  
        login: async (username) => {
          console.log(username);
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
            console.log(data);
            console.log(data.username);
            console.log("access_token: " + data.token);
            sessionStorage.setItem("token", data.token);
            setStore({ token: data.token, username: data.username });
            console.log(store.username);
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
  