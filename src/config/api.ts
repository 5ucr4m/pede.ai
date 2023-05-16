export const config = {
  baseUrl: "https://desafio.pede.ai/api/v1",
};

export const ApiUrls = {
  base: config.baseUrl,

  // Auth/user
  login: `${config.baseUrl}/enviarToken`,

  // Store
  store: `${config.baseUrl}/store`,
};
