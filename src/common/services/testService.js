export const getDataFromTestApi = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}`);
  const data = await response.json();

  const options = [];

  options.push(
    await data?.facilities.map((item) => ({ value: item, label: item }))
  );
  options.push(
    await data?.fuel_types.map((item) => ({
      value: item.name_tr,
      label: item.name_tr,
    }))
  );
  options.push(
    await data?.units.map((item) => ({
      value: item.name_tr,
      label: item.name_tr,
    }))
  );
  options.push(
    await data?.sources.map((item) => ({
      value: item.name_tr,
      label: item.name_tr,
    }))
  );
  options.push(
    await data?.fuels.map((item) => ({
      value: item.name_tr,
      label: item.name_tr,
    }))
  );

  return options;
};
