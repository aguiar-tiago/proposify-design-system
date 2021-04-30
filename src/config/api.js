const API_ENDPOINT = "https://portugalstoreapi.fpf.pt/v1/";

export const getSearchEndpoing = query => `${API_ENDPOINT}search?q=${query}&fields=id,name,slug,pre_sale_date,articles(id,attributes(id,type,name,value),price,cover(image,thumb))&locale=pt`;

