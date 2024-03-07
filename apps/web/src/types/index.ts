export type UserProps = {
  id: string;
  firstname: string;
  lastname: string;
};

export type JWTProps = {
  access_token: string;
};

export type CategoryProps = {
  id: number;
  title: string;
  icon_filename: string;
  icon_filepath: string;
  type: "category";
  types?: TypesProps[]
};

export type TypesProps = {
  id: number;
  title: string;
  type: "type";
};

export type DataProps = CategoryProps | TypesProps;

export type ResponseProps = {
  keyword: "d";
  num_result: 137;
  data: DataProps[];
};
export type SektionProp = {
  id: 1;
  title: string;
  color: string;
  filename: string;
  filepath: string;
  categories: CategoryProps[];
};
