interface IDisccounts {
  disccount?: Array<{
    type: string;
    code: string;
  }>;
  aditional?: Array<{
    code: string;
    percentual: number;
  }>;
}

export interface IClient {
  id: string;
  name: string;
  cnpj: string;
  network: string;
  deadline: string;
  disccount?: IDisccounts;
}
