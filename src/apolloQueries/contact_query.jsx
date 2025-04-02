import { gql } from "@apollo/client";

export const CONTACT_QUERY = gql`
  mutation CreateContactUs(
    $Name: String!,
    $Mail: String!,
    $Mobile: Long!,
    $Message: String!
  ) { 
    createContactUs(
      data: { 
        Name: $Name, 
        Mail: $Mail, 
        Mobile: $Mobile, 
        Message: $Message 
      }
    ) {
      createdAt
    }
  }
`;

