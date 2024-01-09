import { Vars } from '../../../../global/script';

export const fetchOntologyData = async () => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoints.getOntology}`;
  console.log(url);
  let success: boolean = false;
  let payload: any;

  let options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      success = true;
      payload = data.payload;
      console.log(payload);
    })
    .catch(error => {
      console.log(error);
    });

  let returnObj = {
    success: success,
    payload: payload,
  };

  return returnObj;
};
