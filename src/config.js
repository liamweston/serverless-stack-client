
  const dev = {
    STRIPE_KEY: "pk_test_WPhOvuSkSeFOmwaNNt25ILAH",
    s3: {
      REGION: "eu-west-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-k0ssfb1k65r7"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://fnui3sjixd.execute-api.eu-west-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_mcL9odiw8",
      APP_CLIENT_ID: "7k4i1kjtdjv66okh0ct2jgjabj",
      IDENTITY_POOL_ID: "eu-west-2:0aa5cfc5-573f-4ec4-b89e-54133a6e917d"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_WPhOvuSkSeFOmwaNNt25ILAH",
    s3: {
      REGION: "eu-west-2",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-2ytc7jrqen4w"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://tif8ufz4cj.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_C1TQe66QK",
      APP_CLIENT_ID: "433ufbj1o8el4gs1ca17fqd2t5",
      IDENTITY_POOL_ID: "eu-west-2:a5b20895-8f26-44bc-9524-74184913e485"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };