const getCategories = () => fetch('https://api.gousto.co.uk/products/v2.0/categories',{
  method: 'GET',
  mode: 'cors'
});

const getProducts = () => fetch('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attri butes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120',{
  method: 'GET',
  mode: 'cors'
});

export { getCategories, getProducts }