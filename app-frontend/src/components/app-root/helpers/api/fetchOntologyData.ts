import { Vars } from '../../../../global/script';

export const fetchOntologyData = async () => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoints.getOntology}`;
  let success: boolean = false;
  let ontologyData: any;
  let sessionId: string = '';

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
      ontologyData = data.ontologyData;
      sessionId = data.sessionId;
    })
    .catch(error => {
      console.log(error);
    });

  let returnObj = {
    success: success,
    ontologyData: JSON.parse(ontologyData),
    sessionId: sessionId,
  };

  return returnObj;
};
