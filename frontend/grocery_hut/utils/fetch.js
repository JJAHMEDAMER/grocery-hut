async function get() {
  const res = await fetch("http://127.0.0.1:8000/api/grocery/");
  const resJson = await res.json();
  //   setAppList(resJson);
  return resJson;
}

async function post(inputValue) {
  await fetch("http://127.0.0.1:8000/api/grocery/", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: inputValue,
    }),
  });
  get();
}

async function put(id, editValue) {
  await fetch(`http://127.0.0.1:8000/api/grocery/${id}/`, {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: editValue,
    }),
  });
  get();
}

async function delete_rest(id) {
  await fetch(`http://127.0.0.1:8000/api/grocery/${id}/`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
  get();
}

export { get, put, post, delete_rest };
