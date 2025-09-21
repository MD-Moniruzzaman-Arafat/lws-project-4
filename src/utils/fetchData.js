async function loadData(url) {
  try {
    const response = await fetch(url);
    return response;
  } catch (error) {
    return error;
  }
}

export default loadData;
