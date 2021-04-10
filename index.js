const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const constructUrl = (searchTerm, searchOption) => {
  if (searchTerm && searchOption) {
    return `https://www.loc.gov/${searchOption}/?q=${searchTerm}&fo=json`;
  } else {
    return `https://www.loc.gov/search/?q=${searchTerm}&fo=json`;
  }
};

const onSubmit = async (formEvent) => {
  formEvent.preventDefault();

  const searchTerm = $("#search-text").val();
  const searchOption = $("#search-options").val();

  const url = constructUrl(searchTerm, searchOption);

  const data = await fetchData(url);

  console.log(data);
};

$("#search-form").on("submit", onSubmit);
