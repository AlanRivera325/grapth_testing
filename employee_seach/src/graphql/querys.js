import { gql } from "@apollo/client";

export const ListEmployee = gql`

    {getEmployees {
        id_employee
        first_name
        last_name
        email
        naotionality
        phone
        cs
        birthday
    }}
`;

export const GetCredentials = gql`
    query GetCred($breed: String!){
        getUserCred(username: $breed) {
            username
            password
        }
    }
`;