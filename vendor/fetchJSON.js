const fetchJSON = async (url, req) => {
  const opt = req ? {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req)
  } : null;

  const res = await (await fetch(url, opt));
  return res;
};

export { fetchJSON };