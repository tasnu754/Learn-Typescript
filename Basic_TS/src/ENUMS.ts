enum ResTypes {
  SUCCESS,
  FAILED,
  UNAUTHORIZED,
}

interface APIResponse {
  name: string;
  type: ResTypes;
  country: string;
}

let response: APIResponse;

response = {
  name: "Tasnuva",
  type: ResTypes.FAILED, // O/P: type: 1
  country: "BD",
};

let response2: APIResponse;
response2 = {
  name: "Tasnuva",
  type: ResTypes.SUCCESS, // O/P: type: 0
  country: "BD",
};
